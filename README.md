# About

The goal of this application is to become a gamified experience to increase CyberSecurity awareness. The backbone was provided by Hoxhunt as part of their assignment for summer 2020, in which they created a GraphQL API and a simple React application that queries infromation from that API. My job was finalize this application.

<a href="https://raw.githubusercontent.com/Claudiferock/threat-hunt/master/public/threatHunt.gif"><img src="https://raw.githubusercontent.com/Claudiferock/threat-hunt/master/public/threatHunt.gif" alt="Gif of the app's opening" width="720"/></a>  

# Good to know
Application is written in Typescript.

Frontend: Using React-Hooks, styling done with Styled Components

Backend: Database layer / persistance layer is done with Typeorm, GraphQL schema is defined with TypeGrapqhl

NOTE: This app won't install with newest version of Node. Verified working version: v10.16.0
You can use nvm to switch version by running ``nvm use`` in the root of the project (see .nvmrc -file)

## Scripts
Use yarn instead of npm, there is some bug with npm and Docz.

Install dependencies: `yarn`

Develop front end components on simple encapsulated environment: `yarn docz:dev` localhost:9001

Develop frontend app: `yarn start:front` localhost:8080

Develop backend app: `yarn start:back` localhost:4000
