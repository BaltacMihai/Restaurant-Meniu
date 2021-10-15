# Sass File Structure

This is the structure of the sass files that I use and recommend. It is very important to have the same folder structure in all your projects, so it is easier for you to navigate and modify the project.
I don't use all the folders everywhere (some projects may not have themes, etc.).
I also recommend using the BEM convention to name classes.

# How is it used?

Only the main.scss file is compiled, it imports the other files.

Example:

```scss
@import "base/module";
```

Where the ___base___ is the folder and ___module___ is the imported module (where in turn it will import sass files from that specific folder).

!! In order not to copy the .scss files, we put a "_ ", so we have "\_variable.scss"

## Base
Contains global styles, such as resets, typography, colors, etc.

Example:

```scss
@import "colors";
@import "typography";
```

## Components

Contains each self-contained component in its own .scss partial

Example:

```scss
@import "card";
```

## Layout
Contains styling for larger layout components


Example:

```scss
@import "nav";
@import "header";
@import "container";
@import "footer";
```

## Pages
Contains page-specific styling, if necessary


Example:

```scss
@import "html";
@import "homepage";
@import "about";
```

## Themes
Contains styling for different themes


Example:

```scss
@import "default_theme";
@import "white_theme";
@import "dark_theme";
```

## Utills
Contains global mixins, functions, helper selectors, etc.



Example:

```scss
@import "responsive";
@import "animations";
```


















