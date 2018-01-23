# Installation
```
npm i git+https://github.com/TsuyoshiTsai/mixins.git -S
```

# Settings
## SCSS
Just import `mixins.scss` in which scss file you need mixins
```
// any.scss
@import "~/mixins-scss/mixins.scss";
```

## sass-resources-loader
### Vue
See [Using Pre-Processors](https://vue-loader.vuejs.org/en/configurations/pre-processors.html) - Loading a global settings file part.

As an example, if you are using [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack), modify `build/utils.js` like so:

```
scss: generateLoaders('sass').concat({
  loader: 'sass-resources-loader',
  options: {
    resources: require('mixins-scss').resources
  }
}),
```

Now you can use mixins in any `.vue` and `.scss` files.