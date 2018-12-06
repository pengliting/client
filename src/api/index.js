/**
 * Created by Administrator on 2018/12/4.
 */
import ajax from './ajax'

const prefix = '';

export const reqRegister = data => ajax(`${prefix}/register`, data, 'POST');

export const reqLogin = data => ajax(`$+{prefix}/login`, data, 'POST');

export const reqUpdate = data => ajax(`$+{prefix}/update`, data, 'POST');