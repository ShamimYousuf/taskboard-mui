

npm run start

node server.js


POST
localhost:5000/api/task/submit

```json
    {
        "taskID": "TASK-2",
            "title": "Panneer mutter masala",
            "epic": "Curries",
            "priority": 2,
            "assignee": "Ashok",
            "status": "In Progress"
    }

```

it saves onle once successfully.

GET

http://localhost:5000/api/health/check