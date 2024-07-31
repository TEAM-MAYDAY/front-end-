const path = require('path');

module.exports = {
  entry: './src/index.js', // 진입점 파일
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들 출력 디렉토리
    filename: 'bundle.js' // 출력 파일 이름
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // 정적 파일이 위치한 경로
    compress: true,
    port: 3000, // 개발 서버 포트
    proxy: {
      '/api': {
        target: 'http://ec2-15-165-17-43.ap-northeast-2.compute.amazonaws.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel 로더
          options: {
            presets: ['@babel/preset-react'] // React 프리셋
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // CSS 로더
      }
    ]
  }
};
