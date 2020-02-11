# [iFunded - Code Challenge](https://iorrah.github.io/ifunded)

![Project Cover](src/assets/preview.png)

"iFunded - Code Challenge" is a project built as part of the hiring process at the [iFunded](https://ifunded.de) company. The project brief required that I developed a simple web app using [Vue.js](https://vuejs.org) where the user could see a list of the users, add new users and edit their first/last name + email.

My proposal involves creating a [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management) platform to aggregate and manipulate the service<>user relationship.

To achieve this result, I started with the User Experience aspects of the interface, then moved into the User Interface details and lastly into Frontend Development. To gain time, I have made use of [Vue CLI](https://cli.vuejs.org) to quickly scaffold the project. The modals and snackers have all been created with pure Vanilla Javascript and Vue.js state manipulation.

I deliberately made the decision of not using any styling library and wrote the [SASS/CSS](https://sass-lang.com) code by myself.

It was my intention to use [Vuex](https://vuex.vuejs.org) to manipulate the global source of data given the fact that I am working with a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) and keeping the data-lifecycle legible becomes much easier when data-manipulation is modularised. [Vue Router](https://router.vuejs.org) was left outside given the fact that the project brief only requires one page and the state does not need to be persisted across multiple routes.

See the Live Demo for this project [here](https://iorrah.github.io/ifunded).

## 1. Start by cloning the project

Clone with SSH

```
git clone git@github.com:iorrah/ifunded.git
```

## 2. Install the dependencies

Setup the project

```
npm install
```

### 3. Start the local server

Compiles and hot-reloads for development

```
npm run serve
```

### 4. Further reference

#### Compiles and minifies for production
```
npm run build
```

#### Run your unit tests
```
npm run test:unit
```

#### Run your end-to-end tests
```
npm run test:e2e
```

#### Lints and fixes files
```
npm run lint
```
