<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    A personal website built to showcase myself and my portfolio. Site URL / Demo: 
    <a href="https://wongalex.io">wongalex.io</a>
    <br />
    <br />
    <a href="https://www.github.com/wongalex">About Me</a>
  </p>
</p>

[![Site preview](/public/social-image.png)](https://wongalex.io)

## Table of Contents

- [Technology Stack 🛠️](#technology-stack-)
- [Structure ⚓](#structure-)
- [Sharing 💗](#sharing-)
- [Prerequisites 🍪](#prerequisites-)
- [Setup And Deployment 🔧](#setup-and-deployment-)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)

## Structure ⚓

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, and Goals
  - Resume button
- Education (optional)
- Experience (optional)
- Projects (using GitHub API) (optional)
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add your resume. Click the star ⭐ if you like the project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also have a GitHub account.

## Setup And Deployment 🔧

1. To get started, fork this repository to your GitHub account.

2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in your favorite editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer to [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing, run the following bash commands:

   ```bash
   npm install
   ```
   This will install all the dependencies needed to run this app. The dependencies will be stored in a folder named node_modules under the home folder.
   
   After installing the dependencies, you can first test the app before deploying it by running:
   
   ```bash
   npm start
   ```
   This will start up the app. You can access it from your favorite browser and entering for the URL:
   
   ```
   localhost:3000
   ```

8. To deploy website, first run:

   ```bash
    npm run build
   ```
   This will create a build folder under the home folder that will hold all the final assets that will be deployed. Finally, to deploy, run:
   
   ```bash
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer to [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats! Your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact me at alexwong@g.harvard.edu .


## Notice:

This project has been archived, thus it is no longer actively maintained by the developer. Feel free to fork, use, and maintain your own version. 

