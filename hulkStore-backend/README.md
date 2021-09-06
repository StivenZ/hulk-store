<h1 align="center">Hulk Store</h1>
<p align="center">User Interface</p>

---

## Description

Hulk Store Backend provides a view on store inventary and a view with administrator privileges.

## Endpoints :end:

Product CRUD uses the following resources:
| | route | method | description |
| --- | ----- | ------ | ----------- |
| **/api/items** | GET | retrieves all the products in the database |
| **/api/user** | POST | create a new user with admin privileges |
| **/api/auth/login** | POST | login and creates a new token for a user with privileges to perform CRUD operations |

## Getting started

First clone this repo locally:

```bash
git clone https://github.com/StivenZ/hulk-store.git
```

Navigate to the backend directory:

```bash
cd hulkStore-backend/
```

Install all the dependencies to run the project locally:

```bash
npm install
```

Once everything is installed, proceed to run the app:

```bash
npm run dev
```

Now the app can be tested using any HTTP request tester. In this case, it can be tested using the `curl` command.

#### get requests

To retrieve all objects stored:

```bash
curl http://localhost:4000/api/items
```

- **Steven Espinosa** <[StivenZ](https://github.com/)>
