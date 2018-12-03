/**
 * Created by Administrator on 2018/12/3.
 */
import React, {Component} from 'react';

import logo from './logo.png';
import './index.less';

class Logo extends Component {
    render () {
        return (
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        )
    }
}

export default Logo;


