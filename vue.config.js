const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    port: 7000,

    proxy: {                 //���ô���������
      '/api': {              //����������  ��������ʽ   б��+���������֣����ֿ����Լ���
        target: 'http://localhost:8080',     //�����Ŀ���ַ
        changeOrigin: true,              //�Ƿ�����ͬԴ�������ǵ�
        pathRewrite: {                   //·����д
          '^/api': ''                     //ѡ��������������������
        }
      }
    }
  }
})
