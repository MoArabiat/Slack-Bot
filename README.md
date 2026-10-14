# Slack Jira Time Tracker Bot

A Slack bot integrated with Jira that allows users to easily view their Jira tickets directly from Slack and track the time they spend working on them.

## 🚀 Features

- 📋 **List Jira Tickets** — View your assigned Jira tickets directly in Slack.
- ⏱️ **Time Tracking** — Track the amount of time spent working on Jira tickets.
- 🔗 **Jira Integration** — Connect Slack with Jira to make ticket management easier.
- 💬 **Slack Commands** — Interact with Jira through simple Slack commands.
- ⚡ **Easy Access** — Manage and track your Jira work without constantly switching between Slack and Jira.

## 🛠️ Technologies

- **TypeScript**
- **Node.js**
- **Slack Bolt**
- **Jira REST API**
- **Axios**
- **Slack Socket Mode**

## 📌 How It Works

The bot connects Slack with Jira through their APIs.

Users can interact with the bot directly from Slack to:

1. Request their Jira tickets.
2. View the tickets assigned to them.
3. Select or work on a Jira ticket.
4. Track the time spent working on the ticket.
5. Send the tracked work time back to Jira.

This makes it easier for users to manage their Jira work while staying inside Slack.

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <repository-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add the required Slack and Jira credentials.

```env
SLACK_BOT_TOKEN=your_slack_bot_token
SLACK_APP_TOKEN=your_slack_app_token
JIRA_BASE_URL=your_jira_url
JIRA_EMAIL=your_jira_email
JIRA_API_TOKEN=your_jira_api_token
```

> Never commit your `.env` file or expose your API tokens.

### 4. Start the bot

```bash
npm start
```

Or, if you are using the development setup:

```bash
npm run dev
```

## 💻 Slack Commands

| Command | Description |
|---|---|
| `/list-tickets` | Lists the user's Jira tickets |
| `/track-time` | Starts or manages time tracking |

> More commands will be added as the project develops.

## 🔄 Project Flow

```text
User
  ↓
Slack
  ↓
Slack Bot
  ↓
Jira API
  ↓
Jira Tickets / Worklogs
```

The bot acts as a bridge between Slack and Jira, allowing users to interact with their Jira tasks directly from Slack.

## 📚 What I Learned

While developing this project, I worked with:

- Slack Bolt and Slack app development
- TypeScript
- REST APIs
- Jira API integration
- Environment variables and API credentials
- Slack commands and events
- Time tracking and Jira worklogs
- Connecting multiple services together

## 🚧 Project Status

**In Development**

The project is currently being developed, with additional Jira and time-tracking features planned.

## 👨‍💻 Author

**Mohammad Arabiat**

Computer Science Student