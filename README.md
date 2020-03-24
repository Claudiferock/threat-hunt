# Home assignment
For this assignment we have created a GraphQL API and a simple React application that queries infromation from that API. It is your job to finalize this application. There are some mishaps in the backend, and coding to be done in the frontend. More information of these tracks down below in Tracks section.

This assignment assumes that you are comfortable with node.js projects, have some experience with React and have either knowledge of backend or frontend technologies.

Application consists of two addresses, localhost:8080 which serves the frontend and localhost:4000 which is the address for GraphQL endpoint and playground. You can find the scripts to start these from below. You need to have both back and frontend running for the whole application to work.

If these don't feel like something you'd like to do, you can also decide to do something different. You can also decide to do both tasks or more to this project.

Happy hunting!

# Good to know
Application is written in Typescript.

Frontend: Using React-Hooks, styling done with Styled Components

Backend: Database layer / persistance layer is done with Typeorm, GraphQL schema is defined with TypeGrapqhl

NOTE: This app won't install with newest version of Node. Verified working version: v10.16.0
You can use nvm to switch version by running ``nvm use`` in the root of the project (see .nvmrc -file)

## Tracks
### Frontend
We have provided frontend with information about our Heroes. You can find the query that gets the data from `src/app/views/HeroIndex/index.tsx` file.

We have NOT created HeroCard (`src/app/components/HeroCard/index.tsx`). It is your job to design and implement visuals for this component.

You can decide what of the data you use, if you want to open those cards to modals or/and have them there. The stage is really yours. 

Those two files mentioned above will be where your main focus should be, but you can also change anything you want if you wish to.

This tracks point is to test your React + HTML + CSS skills and visual "eye".

### Backend
Database structure is not optimal. Our hero attributes are not normalized properly. 

Your job is to normalize strength, intelligence, stamina, agility and speed into Attribute entity, and healthpoints and mana into Lifepower entity and create relationships for these. You can also improve the datastructure however you please. 

You can find hero entity in: `src/server/entities/hero.ts`

For more information about relationships in typeorm see `https://github.com/typeorm/typeorm/blob/master/docs/relations.md`

This tracks point is to test your debugging skills and skill gaining more knowledge from documentation

## What we expect
We really want you to have fun and learn something while doing this. 

After you've returned your implementation, we'll have a discussion with you where we go through your code together. Also think how you would improve your implementation or the application.

## What we don't expect
We don't want you to spend countless hours struggling with one minor detail. If you hit a wall, try to implement something else.

## Scripts
Use yarn instead of npm, there is some bug with npm and Docz.

Install dependencies: `yarn`

Develop front end components on simple encapsulated environment: `yarn docz:dev` localhost:9001

Develop frontend app: `yarn start:front` localhost:8080

Develop backend app: `yarn start:back` localhost:4000
