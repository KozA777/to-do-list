# To-Do List App

This is a simple **To-Do List** application built using **Flask**. The app allows users to create, edit, mark as done, and delete tasks. The goal of this project is to demonstrate REST API functionality and basic CRUD operations.

## Features

- Add new tasks with a description and priority level.
- Mark tasks as **Done** or **Not Done**.
- Edit existing tasks.
- Delete tasks (with a confirmation prompt).
- Prioritize tasks (Low, Medium, High).
- Cross out tasks when marked as done.
- Simple and clean user interface with styled buttons and banners.
  
## Technologies Used

- **Python** (Flask framework)
- **HTML5** and **Jinja2** templating
- **CSS** for styling
- **SQLite** as the database (optional: can also be replaced by PostgreSQL)

## Setup and Installation

To run the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/to-do-list.git
cd to-do-list
```

2. Set up a virtual environment:
```bash
python -m venv venv
source venv/bin/activate    # On Windows use `venv\Scripts\activate`
3. Install dependencies:
bash
pip install -r requirements.txt
4. Run the Flask app:
bash
```flask run
The app should now be accessible at http://127.0.0.1:5000/.

5. Database Setup (if using SQLite):
If you are using SQLite (the default option), the database will be automatically created when the app is first run. You can add some test data through the web interface.

Usage
Adding a Task
Click the "Add Task" button and fill out the task title, description, and priority. The new task will appear in the list.

Editing a Task
To edit a task, click the "Edit" button next to the task you want to modify. Make your changes and save them.

Deleting a Task
Click the "Delete" button next to the task you want to remove. You will be prompted to confirm the deletion before the task is permanently removed.

Marking as Done
When a task is completed, click the checkbox next to the task to mark it as "Done." This will strike through the task and change its status.

Project Structure
csharp
todo_api/
│
├── app.py              # Main Flask application
├── static/             
│   ├── styles.css      # CSS styling
├── templates/          
│   ├── index.html      # Main page template
│   ├── edit_task.html  # Task editing template
└── requirements.txt    # Project dependencies
License
This project is licensed under the MIT License.
