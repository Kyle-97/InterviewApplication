# Codespaces Setup

Open application in codespaces

Open new terminal if necessary

Change directory to the application root folder with "cd InterviewApplication"

nvm install 16.14

npm install -g @angular/cli

npm install

ng serve

# Debugging
Debugging is not working when running in codespaces

# Issue Statement 1
It has been reported that when viewing the task summary screen, the loading indicator initially shows but then goes away and shows the task table. However for a moment they see an additional column with a button to delete the tasks, which they should not see as they do not have permission to delete tasks. The user should not see the table of tasks until all required processing has completed to determine what to show to the user.

# Enhancement Request 1
The API for tasks is returning a taskDueDate which is not currently showing in the table. Update the table to have another column to show the task due date. Not all tasks have an assigned task date.

# Enhancement Request 2
Some tasks should be prioritized based on their due date. If the due date is less than 7 days out from the current date, the row should be highlighted by using the "priority" css class (already defined). Any tasks that are priority should be sorted to the top of the table.
