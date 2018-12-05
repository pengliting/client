/**
 * Created by Administrator on 2018/12/4.
 */
import ajax from 'ajax';

export default async function (url,data,method = 'GET') {
    //请求
    let qs = '';
    if(data){
        //返回一个数组，数组中包含对象中的所有属性名
        const arr = Object.keys(data);
        //遍历数组，拼接qs字符串
        arr.forEach(key => {
           qs += `${key}=${data[key]}&`;
        })
        //去掉后面
        qs.substring(0,qs.length - 1);
    }
    //判断请求方式
    const type = method.toUpperCase();
    if(type === 'GET'){
        //发送请求
        const result = await axios.get(url + '?' + qs);
        return result.data;
    }else if(type === 'POST'){
        //发送请求
        const result = await axios.post(url, qs, {
            'content-type': 'application/x-www-form-urlencoded'
        });
        return result.data;
    }
}