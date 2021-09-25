module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Form.js',
          'src/components/merge/todo/FilterButton.js',
          'src/components/merge/todo/Todo.js',
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
    wrapper: 'src/wrapper/UXPinWrapper.js',
  },
  name: 'Learn UXPin Merge - React Todo list tutorial'
};
