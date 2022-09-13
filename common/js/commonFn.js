// 英文月份转阿拉伯数字
function monthTransitionFn(month) {
    let current_month
    const chn_mon_arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];    //中文参照
    const en_mon_arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  //英文月份
    for (var i = 0; i < chn_mon_arr.length; i++) {      //循环匹配
        if (month == en_mon_arr[i]) {
            current_month = chn_mon_arr[i]
        }
    }
    return current_month
}