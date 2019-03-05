module.exports = {
  extends: ['eslint-config-gnavi'],
  parser: 'babel-eslint',
  env: {
    // 使用環境設定
    browser: true,
  },
  globals: {
    // global変数許可設定
    gNaviGlobalState: true,
    google: true,
  },
  rules: {
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    // use strictを許可
    'strict': 0,
    // console メソッドを警告
    'no-console': 1,
    'no-magic-numbers': 1
  },
};
