# BookME fullstack application

## About

BookME built with Django, Vue/TypeScript + TailwindCSS. <br />
Frontend was built using TypeScript _v4.1.5_, npm _v8.5.5_ and Node _v14.15.5_. <br />
Backend was built using Python _v3.10.12_ and pip _v23.2.1_.

## Running

> **_Be sure to run the application with same or similar versions of Node, npm, Python and pip!_**

### Backend

To run the application we need to install some libraries first.
Firstly we need **_Django_** itself, and then _Djoser_(that installs _Django Rest Framework_ and other dependencies), _Django Cors Headers_ for handling CORS, and _Pillow_ for handling book image fields:

```
pip3 install django
pip3 install djoser
pip3 install django-cors-headers
pip3 install Pillow
```

To start the server, we need to run the next command in "pzaztv" directory:

```
python3 manage.py runserver
```

It will start on port 8000 by default, we could add flag to the command to change it. <br />
We can then access the API through our localhost on the port 8000

> http://localhost:8000/

, and see all available routes without having to authorize ourselves. In this case we have only one route that's called books and where we can see all of the books added by through the admin dashboard:

> http://localhost:8000/books/

If we want to access the admin dashboard and see all of the tables,
we need to go to the admin route:

> http://localhost:8000/admin/
> and login with the credentials:
> stefanikolic:stefanikolic

### Frontend

To start the client application, we need to run the next commands in "frontend" directory:

```
npm install
npm run serve
```

It will start on port 8000 by default, but since we already have a server running on that port, application will start on the free one, usually that will be the port 8080. <br />
We can then access the API through our localhost on the port 8080(or other one, check the console to see on which)

> http://localhost:8080/

## Examples

### UI

Home page(route: '/') where guest can see the books that we offer for their listing even when user is not logged in: ![Screenshot](screenshots/home.png)

When user click "Read more" under the book image, it takes him to page of that book(route: '/book/:id') where he can see all the data about it: ![Screenshot](screenshots/dostoyevski.png)

By clicking on the "LOGIN" button in the top right corner, user goes to the login page(route: '/login') and can choose if he wants to log in or sign up(route: '/register'):![Screenshot](screenshots/login.png)![Screenshot](screenshots/register.png)

_Login credentials if you don't want to create and account:_

> stefan:djagno1234

After logging in, user gets the identical home page like before but instead of "LOGIN" button there's a "LISTS" button:![Screenshot](screenshots/loggedin.png)

When user who's logged in clicks on "Read more" he gets an option to add a book to one of his lists if the book isn't already on it:![Screenshot](screenshots/dostoyevskiloggedin.png)

After adding a book to the list, that list is no longer available for that book because it's already on it.

When user goes to the lists page(route: '/lists'), he can see all his lists, create new ones and manage the existing ones:![Screenshot](screenshots/lists.png)

If he wants to add a new list, by clicking on the button he goes to the new list page(route: '/lists/new'):![Screenshot](screenshots/newlist.png)

If he wants to remove some list, a modal shows and asks if it's the user is sure about it:![Screenshot](screenshots/delete.png)

If he wants to edit some list, by the click of the button he goes to the edit page(route: '/lists/edit/:id'):![Screenshot](screenshots/editlist.png)

### Frontend

Based on the Vuex store that holds the User data(token,user_id, book_lists) and Book data we can create route guards and make some routes private or disable access to login and registration pages when user is logged in with the help of local storage that we use to keep the user logged in: ![Screenshot](screenshots/userstore.png)

Protected routes:![Screenshot](screenshots/router.png)

With the use of services that we built on top of axios we fetch the data accordingly:![Screenshot](screenshots/axiosconfig.png)![Screenshot](screenshots/userdataservice.png)![Screenshot](screenshots/bookdataservice.png)

### Backend

There are two directories in the "pzaztv" directory, the other "pzaztv" directory is the configuration for the application and directory "books" is the application that we are using for the backend. <br />

We have an uploads directory for the images of the books that we uploaded through and admin dashboard, shell, postman or something similar.

As we can see in the "/pzaztv/setting.py" file, besides _rest_framework, corsheaders and djoser_, we installed _BooksConfig from "Books" app_:![Screenshot](screenshots/settingspy.png)

We defined root of the media files so that we can fetch the uploaded images on the frontend, and we also defined default authentication classes for the Django rest framework at the and of the file: ![Screenshot](screenshots/settingspy2.png)

Regarding to urls we can see that our main route is for the _"books"_ application, and we also covered other routes with the views from the same application. Authentication routes are covered by _djoser_, and of course we added media root address:![Screenshot](screenshots/pzaztvurls.png)

Router in the books urls file is just registering viewset for Books model where we used serializers from the django rest framework to help us send data in json format:![Screenshot](screenshots/booksurls.png)![Screenshot](screenshots/views.png)![Screenshot](screenshots/serializers.png)

We have just two models that we registered to the admin dashboard and that are handling all the data that we need, because for the users we used Djangos users table:![Screenshot](screenshots/models.png)![Screenshot](screenshots/db.png)![Screenshot](screenshots/admin.png)

## Libraries

### Frontend

- [Vue 3](https://vuejs.org/)
- [Vue-Router](https://router.vuejs.org/)
- [Vuex 4](https://vuex.vuejs.org/)
- [TypeScript ~4.1.5](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [TailwindCSS 3](https://tailwindcss.com/)

### Backend

- [Django 4](https://www.djangoproject.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Cors Headers](https://pypi.org/project/django-cors-headers/)
- [Python3](https://www.python.org/)
- [Djoser](https://djoser.readthedocs.io/en/latest/index.html)

### Tools

- [npm 8.5.5](https://www.npmjs.com/)
- [Conventional Commits 1](https://www.conventionalcommits.org)
- [eslint 6.7.2](https://eslint.org/)
- [Prettier 2](https://prettier.io/)
- [VS Code settings](https://code.visualstudio.com/)
- [pip](https://pip.pypa.io/en/stable/)
