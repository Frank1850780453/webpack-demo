// 引入 css
import './style/index.css';
import './style/index.less';
import _ from 'lodash';
import { showDate } from './common';

const currentDate = showDate()
console.log(`首页打开时间为-${currentDate}`)

console.log(_.now())
