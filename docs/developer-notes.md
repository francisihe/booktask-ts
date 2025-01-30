Calendly's assumed structure

/calendly-clone
├── /client                 # React Frontend
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   ├── /pages
│   │   ├── /services       # API Calls
│   │   ├── /store          # Redux Store (if using Redux)
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...             # Other React related files
├── /server                 # Node.js Backend
│   ├── /config             # Configuration files
│   │   ├── db.js
│   │   ├── ...             # Other configuration files
│   ├── /controllers        # Controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── eventController.js
│   │   ├── calendarController.js
│   │   └── ...
│   ├── /middleware         # Middleware functions
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── ...
│   ├── /models             # Models (MongoDB schemas)
│   │   ├── userModel.js
│   │   ├── eventModel.js
│   │   ├── calendarModel.js
│   │   └── ...
│   ├── /routes             # API Routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── calendarRoutes.js
│   │   └── ...
│   ├── /services           # Business logic
│   │   ├── emailService.js
│   │   ├── calendarService.js
│   │   └── ...
│   ├── /utils              # Utility functions
│   │   ├── tokenUtils.js
│   │   ├── dateUtils.js
│   │   └── ...
│   ├── server.js           # Entry point for the server
│   └── ...
├── package.json
├── README.md
└── ...


// Features
Creating Tasks:
1. You can create tasks on another person's profile as a registered user or not
2. All tasks sent to (assignedTo) another user are 'pending' by default
3. Tasks can be set to auto-accept if the assignee's email is in the auto-accept list.
4. Users can create and assign tasks to themselves within a specific task category.
5. Self-created tasks are automatically accepted.

Reading Tasks:
1. You can only see tasks createdBy you or assignedTo you (self)
2. You can sort tasks by pagination and certain filters (such as task name, description, category, status, and creation date).
3. Retrieve a specific task by its ID.
4. Access is restricted to users who created the task or are assigned to it.


Updating Tasks:
1. You can update tasks createdBy you if assignedTo self
2. You can update tasks createdBy you if the assignedTo user hasn't accepted it (i.e. task status is still pending) (Registered User only)
3. You can request an update to a task if the assignedTo user has accepted it (but it is not yet marked as completed or rejected)
4. Assignees can accept or reject requested changes to tasks. (Check again)
5. Upon acceptance, requested changes are applied; otherwise, they are discarded. (Check again)

Deleting Tasks:
1. You can delete a task createdBy you and assignedTo self
2. You can delete a task if it was assignedTo you


FEATURES TO ADD
1. Add other users to access the task, they get notified via mail
2. Add getting updates via Telegram and Mail
3. Add AI usage to enable querying task and getting them done
4. Add chat functionality
5. Add notifications in-app



Telegram Setup:
1. Create the bot using @Botfather on telegram
2. Get the username, and the token
3. Send the /setdomain command and reply with your domain
4. Go to https://core.telegram.org/widgets/login to define your widget style and auth type
5. Activate the bot widget using the webhook

Webhooks¶
To set the webhook you need to go in your browser (you can CURL or WGET) to the following link:


https://api.telegram.org/bot<bot-id>:<bot-token>/setWebhook?url=https://<your-domain>/webhook/telegram/<bot-id>:<bot-token>
Where:

<bot-id> is the ID of your bot
<bot-token> - your bot's token
<your-domain> - domain of your server
If done correctly, you will get this answer:


{"ok":true,"result":true,"description":"Webhook was set"}