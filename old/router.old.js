
/*
(() => {
    const appDiv = "app";
    const myDiv = document.getElementById(appDiv);

    // Both set of different routes and template generation functions
    const routes = {};
    const templates = {};

    // Generate DOM tree from a string
    const createDiv = (id, xmlString) => {
        let d = document.createElement('div');
        d.id = id;
        d.innerHTML = xmlString;
        return d.firstChild;
    };

    // Register a template (this is to mimic a template engine)
    let template = (name, templateFunction) => {
      return templates[name] = templateFunction;
    };

    // Define the routes. Each route is described with a route path & a template to render
    // when entering that path. A template can be a string (file name), or a function that 
    // will directly create the DOM objects.
    let route = (path, template) => {
        if (typeof template == "function") {
          return routes[path] = template;
        }
        else if (typeof template == "string") {
          return routes[path] = templates[template];
        }
        else {
          return;
        }
    };

    // Give the correspondent route (template) or fail
    let resolveRoute = (route) => {
        try {
         return routes[route];
        } catch (error) {
            throw new Error("The route is not defined");
        }
    };

    // The actual router, get the current URL and generate the corresponding template
    let router = (evt) => {
        const url = window.location.hash.slice(1) || "/";
        const routeResolved = resolveRoute(url);
        routeResolved();
    };

    // Helper function to create a link.
    let createLink = (title, text, href) => {
        let a = document.createElement('a');
        let linkText = document.createTextNode(text);
        a.appendChild(linkText);
        a.title = title;
        a.href = href;
        return a;
    };

    // Register the templates.
    template('template1', () => {
        myDiv.innerHTML = "";
        const login = createLink('login', 'Login', '#/login');
        const register = createLink('register', 'register', '#/register');
        const users = createLink('users', 'Users', '#/users');
        const dashboard = createLink('dashboard', 'dashboard', '#/dashboard');
        const logout = createLink('logout', 'logout', '#/logout');

        myDiv.appendChild(dashboard);
        myDiv.appendChild(register);
        myDiv.appendChild(users);
        myDiv.appendChild(login);
        return myDiv.appendChild(logout);

    });

    template('template-login', () => {
        myDiv.innerHTML = "";
        const login = createDiv('login', `<div><h1>This is login</h1>${loginForm}<a href='#/'>Go Back to Index</a></div>`);
        return myDiv.appendChild(login);
    });

    template('template-register', () => {
        myDiv.innerHTML = "";
        const register = createDiv('register', `<div><h1>This is register </h1>${registerForm}<a href='#/'>Go Back to Index</a></div>`);
        return myDiv.appendChild(register);
    });
    template('template-users', () => {
        myDiv.innerHTML = "";
        const users = createDiv('users', "<div><h1>This is users  </h1><a href='#/'>Go Back to Index</a></div>");
        return myDiv.appendChild(users);
    });
    template('template-dashboard', () => {
        myDiv.innerHTML = "";
        const dashboard = createDiv('dashboard', "<div><h1>This is dashboard  </h1><a href='#/'>Go Back to Index</a></div>");
        return myDiv.appendChild(dashboard);
    });
    template('template-logout', () => {
        myDiv.innerHTML = "";
        const logout = createDiv('register', "<div><h1>This is logout  </h1><a href='#/'>Go Back to Index</a></div>");
        return myDiv.appendChild(logout);
    });


    // Define the mappings route->template.
    route('/', 'template1');
    route('/login', 'template-login');
    route('/register', 'template-register');
    route('/users', 'template-users');
    route('/dashboard', 'template-dashboard');
    route('/logout', 'template-logout');



    // For first load or when routes are changed in browser url box.
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

})();
*/
