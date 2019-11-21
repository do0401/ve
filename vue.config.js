module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.athlete.ve', // 앱 식별자로써 매우 중요한 역할을 함
        nsis: {
          shortcutName: 'veApp'
        },
        win: {
          target: [
            {
              target: "nsis",
              arch: [
                'x64',
                'ia32'
              ]
            }
          ]
        }
      }
    }
  }
}
