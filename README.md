This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, make sure that you have a suitable version of Node.js. This project uses node v22.14.0. To check your node version, run `node --version`. If you don't have node v22.14.0 installed or a suitable version, the recommended way to install it is with [asdf](https://asdf-vm.com/), a development tool version manager.

```bash
# Install asdf and the node plugin
brew install asdf
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git

# Integrate it with your shell
# ZSH shell integration is shown here, but for installation instructions for other shells, go to https://asdf-vm.com/guide/getting-started.html#_3-install-asdf
echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc

# IMPORTANT: Close that terminal tab/window and open another one to apply the changes to your shell configuration file

# Install the version of node defined in this project's .tool-versions file
asdf install nodejs

# Check that the node version is now 20.17.0
node --version
```

Then, make sure you get the environment variables necessary for this project from Bizz Websites and put them in a `.env` file in the project's root directory.

Once you have these variables you can install the dependencies.

```bash
yarn
```

Lastly, run the development server:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Note: there is a test account you can use. Get this from another developer if you want to use it.

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
