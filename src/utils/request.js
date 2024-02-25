import axios from 'axios'

// 1:����axios����ķ���create,����һ��axiosʵ��
// 2��request����axios,�������Լ�����
const request = axios.create({
    baseURL: '/api',  // ע�⣡�� ������ȫ��ͳһ������ '/api' ǰ׺��Ҳ����˵���нӿڶ������'/api'ǰ׺�ڣ�ҳ������д�ӿڵ�ʱ��Ͳ�Ҫ�� '/api'�ˣ���������2��'/api'������ '/api/api/user'�����ı����мǣ�����
    timeout: 5000
})

// request ���������������������ڷ�����֮ǰ���������������Լ�⵽
// ������������ǰ��������һЩ����
// ����ͳһ��token�����������ͳһ����
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
  
 // config.headers['token'] = user.token;  // ��������ͷ
    return config
}, error => {
    return Promise.reject(error)
});

// response �������� ��Ӧ������
// �����ڽӿ���Ӧ��ͳһ������
request.interceptors.response.use(
    response => {
        let res = response.data;
        // ����Ƿ��ص��ļ�
        if (response.config.responseType === 'blob') {
            return res
        }
        // ���ݷ���˷��ص��ַ�������
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

// ���Ⱪ¶
export default request