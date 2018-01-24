# Installation

```
npm i -S git+https://github.com/TsuyoshiTsai/mixins.git
```

# Settings

## SCSS

Just import `mixins.scss` in which scss file you need mixins

```
// any.scss
@import "~/mixins-scss/mixins.scss";
```

## sass-resources-loader

Install [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) first

```
npm i -S sass-resources-loader
```

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

### React

See [sass-resources-loader](https://github.com/shakacode/sass-resources-loader)

```
/* Webpack@2: webpack.config.js */

module: {
  rules: [
    // Apply loader
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: require('mixins-scss').resources
          },
        },
      ],
    },
  ],
},
```

Now you can use mixins in any `.vue` or `.scss` files.
