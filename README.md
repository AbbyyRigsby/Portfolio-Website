# Portfolio Website v1

My first crack at a portfolio website! Containing everything from a description about what I like, to my projects, to even a little about my publications!
This is a mostly static website for the time being, but more is planned for v2.

## Main Dependencies

| **Dependency** | **Use Case**                               |
|----------------|--------------------------------------------|
|           Vite | Fast, lean server environment.             |
|       React.js | Reusable components making for dynamic     |
|    TailwindCSS | Easy to use styling for advanced websites. |
|    React-Toast | Dynamic notifications.                     |
|   Lucide-React | Professional-looking icons.                |

## Installation

For installation, this assumes you have already created an **Email.js** website and set up an event for your email.

1. Clone the Github Repository to your local machine.
2. Create your own .env file. Use your own EmailJS credentials, including:
- Service ID
- Template ID
- Service Public ID

  This sets up the contact system on the bottom of the page.
  
3. Run the following commands:
```
npm install
npm run dev
```

Now you should have it running on your local machine!

## Deployment Details

### Base Deployment

Once you have uploaded your copy to GitHub, open **Vercel.app** and create a new project. Connect your GitHub repository, then configure the deployment with the following commands:

```
# install
npm install

# leave output folder at default

# build
npm run build
```

Also, click "import .env" to import your .env file variables.

You should be able to deploy from here! 

### Github Actions Setup

This website is deployed to Vercel using GitHub Actions. This allows for **more control** over the pipeline to add jobs wherever necessary. For the beginning part of the tutorial, it's recommended you do not push your .github folder until suggested in the deployment.

From here, you can begin to configure your GitHub Actions workflow.

From here, run the following:
```
npx vercel link
```

You should get the following prompts in your terminal:
```
Set up [TARGET FOLDER]?
yes
Found project [PROJECT NAME]. Link to it?
_yes_
Linked to [PROJECT NAME].
Would you like to pull environment project variables?
_yes_
```

From here, your .gitignore should be updated, and a new folder called .vercel is added. In this, you should see _project.json_, with your **projectID** and **orgID**.

Finally, you need a Vercel Token for this project. Click on Settings at the bottom of the left-hand list on Vercel, then search "Tokens". The result "Tokens" with "Account" underneath should appear. Click it.

Enter the new token name. For "Scope", choose your project. Finally, set your expiration date and hit "enter".

Go to your repository, then **Settings** --> **Secrets and variables** --> **Actions**. From there, enter the following credentials:
- **VERCEL_ORG_ID:** Vercel Organization ID.
- **VERCEL_PROJECT_ID:** Vercel Project ID.
- **VERCEL_TOKEN:** The token just made in your Vercel account.

Finally, save these secrets and re-add the .github folder. Push this folder to your repository. From there, your Github Actions workflow should be operational!
