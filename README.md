# jupyterlab_WeatherWidget
 This simply creates an extension, a widget, that then takes a user's zipcode and outputs some basic weather data. Very simple no real styling or error handling.
 
![image](https://github.com/Ricardo96MC/jupyterlab_topLogo/assets/22580284/b1b635db-f439-434c-a950-0033e8492d14)
![image](https://github.com/Ricardo96MC/jupyterlab_topLogo/assets/22580284/9b8681bc-7e88-4548-a2fd-834bf12f35c8)
![image](https://github.com/Ricardo96MC/jupyterlab_topLogo/assets/22580284/0a3d7d48-96dd-40df-8683-ab3ea4cdb928)
![image](https://github.com/Ricardo96MC/jupyterlab_topLogo/assets/22580284/f0982d26-49c9-4c39-aa65-54904cea7690)


[![Github Actions Status](https://github.com/github_username/jupyterlab-topLogo/workflows/Build/badge.svg)](https://github.com/github_username/jupyterlab-topLogo/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/github_username/jupyterlab-topLogo/main?urlpath=lab)
Creating an extension for familiarity and practice

## Requirements

- JupyterLab >= 4.0.0

## Install

To install the extension, execute:

```bash
pip install jupyterlab_topLogo
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab_topLogo
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab_topLogo directory
# Install package in development mode
pip install -e "."
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab_topLogo
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-topLogo` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
