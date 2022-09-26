# app-data-sharing
Example of sharing data across two web apps that have different hostname:port

In this example, App1 is simulating a legacy application and App2 is simulating a modern application, where the strangler pattern is being used to modernize one module at a time.  The idea is that there would be a main menu with both legacy and modern module entry points.  Each application has all module entry points, but if the module is in the other application, it would only be a stub.

The purpose of the stub is to first save any state, and setup any data to pass to the other application.  The data being sent to the other application would go in a JSON string field and URL encoded 'data' field in the querystring.  All modern browsers and web servers support very large URL limits that should be adequate for data sharing.

When moving between Angular applications, they will start new, but all files previously loaded should be locally cached, so startup time is simply loading the old state from sessionStorage.

In this example, the Home page and Module 1 are both in App1 (legacy) and Module 2 is in App2 (modern).  The UI will show data being sent both ways, and the console will show the legacy application saving and re-using its state as it moves between legacy and modern.
