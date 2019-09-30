# midori-node-server

**Clone and run for a quick way to see Midori project in action.**

This is a minimal project based on the [.NET Project](https://github.com/drchltfpt/MidoriBookStore).

**Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript [Midori API Demos](https://github.com/drchltfpt) app for API code examples to help you get started.**

Midori APIs needs just these files and folders:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `tsconfig.json` - The tsconfig.json file specifies the root files and the compiler options required to compile the project.
- `lib` - All the Typescript files are put in the **lib folder** for development purpose, then for the production, we will
save all the Javascript files in the **dist folder**.
- `app.ts` - Create configuration for application.
- `server.ts` - Start the app and listens on port for connections. This is the app's **main process**.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) and [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/drchltfpt/midori-node-server
# Go into the repository
cd midori-node-server
# Install dependencies
npm install
# Run the app
 # Run in development mode
  npm run dev
 # Run in production mode
  npm run prod
```