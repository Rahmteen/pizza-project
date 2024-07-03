# The Pizza Project

This assignment emphasized documentation to better understand my process, abilities and strengths. To adhere to the task and keep my work simplified, I have provided my general approach below.

## Backend

**Technologies**: Node.js, Typescript (for sanity), Prisma, PostgreSQL, nodemailer (email), OpenAI (chat).

**Overview**: This API must be designed with security in mind regarding administrative routes, safely handle user data, and provide a logging system for internal analysis. Additionally, we should be able to authenicate users, implement an email service for invitees, fetch neccesarry data for the frontend experience, manage orders that users make and (stretch) implement a chat bot to help faciliate user orders.

1. `/auth` - registration and login for users
2. `/user` - fetching user data and placing orders
3. `/admin` - authenticating and providing admin services
4. `/chatbot` - managing the chat bot for users (stretch)

**Services**: An email service, a logging service for user interactions and a chat service for user orders.

**Middlewares**: Admin verification and user verification via JWT. The less user data moving around the better. Additionally, chat related services (stretch)

**Types** 
``` 
User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  role: string;
  validated: Boolean;
  orders: Order[];
}
```

## Frontend

**Technologies**: React, React-Router, Rematch (state mgmt + local storage), Vite (bundling/local hosting), Typescript (for sanity), Chakra UI.

**Overview**: The user-facing portion of this application needs to be simple, easily accessibly to users over the age of 70, and provide the neccesarry information to the client who is managing their orders.

**UI and Palette**: My approach, when mvp is reached, is to implement a warm, earthy color palette, use bigger buttons with clear large font and create simple user journies.

**UX and Accessibility**: Each item that requires user interaction should have a hover state, tab-index and a valid cursor pointer to indicate it's relevance and function to users.

---

**Pages**:

1. `/` - Home (Login)
2. `/admin` - dashboard for admin user
3. `/dashboard` - dashboard for normal users and where to place orders
4. `/register/:token` - registration page, link is provided in the email
5. `/404` - 404, not found page

---

### State Management

**Models**

- `tokenModel` : Manage token and admin state globally for users.
- `loginModel` : Handle user inputs, api calls, loading/error states for `/` login page.
- `registerModel` : Handle user inputs, api calls, loading/error states `/register` page.
- `adminModel` : Manage screens/state of the admin page, user invite input/api calls, fetching logs + and order data.
- `dashboardModel` : Handle user dashboard screens/state, creating new orders, fetching previous orders and (stretch) handling chatbot messages.

<br />
<br />

**Types**

```
Log {
  id: number;
  type: "ERROR" | "ADMIN" | "USER"
  description: string;
  createdAt: string;
}
```

```
Order {
  userId: number;
  createdAt: string;
  id: number;
  cart: PizzaOrder;
}
```

```
export type PizzaSize = "SM" | "MD" | "LG";
export type PizzaIngredientValue = 0 | 1 | 2;

PizzaOrder {
  size: PizzaSize;
  cheese: PizzaIngredientValue;
  sauce: PizzaIngredientValue;
  pepperoni: PizzaIngredientValue;
  sausage: PizzaIngredientValue;
  mushrooms: PizzaIngredientValue;
  onions: PizzaIngredientValue;
  olives: PizzaIngredientValue;
  bacon: PizzaIngredientValue;
  pineapple: PizzaIngredientValue;
}
```