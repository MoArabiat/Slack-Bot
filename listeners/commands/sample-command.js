import axios from 'axios';

const MAX_TICKETS = 100;

const auth = () => ({
  username: process.env.JIRA_EMAIL,
  password: process.env.JIRA_API_TOKEN,
});

const fetchTickets = async (jql) => {
  const issues = [];
  let nextPageToken;

  do {
    const { data } = await axios.get(
      `${process.env.JIRA_BASE_URL}/rest/api/3/search/jql`,
      {
        params: {
          jql,
          fields: 'summary,status,assignee',
          maxResults: 100,
          ...(nextPageToken && { nextPageToken }),
        },
        auth: auth(),
      }
    );
    issues.push(...(data.issues || []));
    nextPageToken = data.nextPageToken;
  } while (nextPageToken && issues.length < MAX_TICKETS);

  return issues;
};

const sampleCommandCallback = async ({ ack, respond, logger }) => {
  await ack();

  try {
    // Which Jira account does the API token belong to?
    const me = await axios.get(`${process.env.JIRA_BASE_URL}/rest/api/3/myself`, {
      auth: auth(),
    });
    logger.info(`Token account: ${me.data.displayName} (${me.data.emailAddress})`);

    const jql = 'project = SCRUM ORDER BY updated DESC';
    const tickets = await fetchTickets(jql);

    logger.info(
      `/listtickets found ${tickets.length} tickets: ${tickets
        .map((t) => `${t.key}->${t.fields.assignee?.displayName || 'Unassigned'}`)
        .join(', ')}`
    );

    if (tickets.length === 0) {
      await respond('No tickets found in the SCRUM project.');
      return;
    }

    let message = tickets
      .map(
        (t) =>
          `• ${t.key} — ${t.fields.summary} [${t.fields.status?.name}] — ${
            t.fields.assignee?.displayName || 'Unassigned'
          }`
      )
      .join('\n');

    if (message.length > 3500) {
      message = `${message.slice(0, 3500)}\n…and more (list truncated)`;
    }

    await respond(`Jira tickets (${tickets.length}):\n\n${message}`);
  } catch (error) {
    logger.error(error.response?.status, error.response?.data || error.message);
    await respond('Sorry, I could not retrieve your Jira tickets.');
  }
};

export { sampleCommandCallback };
