//滚动到顶部
const scrollToTop = () => {

    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {

        window.requestAnimationFrame(scrollToTop);
        // cancelAnimationFrame 可以清除requestAnimationFrame
        window.scrollTo(0, c - c / 8);

    }

};

scrollToTop()

window.onscroll = function () {
    //取网页卷上去的高度
    var h1 = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    //取网页中能看到高
    var h2 = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight
    //取网页正文高，包含被卷上去的内容
    var h3 = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
    if ((h1 + h2) == h3) {
        alert('滚动条已经到最下面啦');
    }
};

// 当前URL
const currentUrl = _ => window.location.href;

// currentUrl() -> 'https://google.com'

//url 参数获取
const getUrlParameters = url =>

    url.match(/([^?=&]+)(=([^&]*))/g).reduce(

        (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}

    );

// getUrlParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}

// 数组去重
const unique = arr => [...new Set(arr)];
const unique = arr => Array.from(new Set(arr));

// unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// const filterNonUnique = arr => arr.filter(e,i => i === array.indexOf(i));
// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]

// some()  类似||
let arr5 = [{
    result: true
}, {
    result: false
}];
let newArr5 = arr5.some((e, i) => e.result); // 只要一个为true，即为true
// every() 类似&&
let arr6 = [{
    result: true
}, {
    result: false
}];
let newArr6 = arr6.every((e, i) => e.result); // 只要一个为false，即为false

// 范围内的随机值
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// randomInRange(2,10) -> 6.0211363285087005
// 范围内的随机整数
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// randomIntegerInRange(0, 5) -> 2

// 获取滚动位置
const getScrollPos = (el = window) =>

    ({
        x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,

        y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    });

// getScrollPos() -> {x: 0, y: 200}

// 数组最大值和最小值
const arrayMax = arr => Math.max(...arr);

// arrayMax([10, 1, 5]) -> 10
const arrayMin = arr => Math.min(...arr);

// arrayMin([10, 1, 5]) -> 1

// 常规localStorage操作 sessionStorage也一样
const ss = window.sessionStorage;
const ls = window.localStorage;
export const Local = {
    get(key) {
        if (key) return JSON.parse(ls.getItem(key))
        return null
    },
    set(key, val) {
        const setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (const i in setting) {
                ls.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ls.setItem(key, JSON.stringify(val))
        }
    },
    remove(key) {
        ls.removeItem(key)
    },
    clear() {
        ls.clear()
    }
};
// cookie
export const Cookie = {
    get(key) {
        let arr = document.cookie.split('; ')
        for (let i = 0; i < arr.length; i++) {
            let arr2 = arr[i].trim().split('=');
            if (arr2[0] == key) {
                return arr2[1]
            }
        }
        return ''
    },
    set(key, value, day) {
        let setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (let i in setting) {
                let oDate = new Date()
                oDate.setDate(oDate.getDate() + day)
                document.cookie = i + '=' + setting[i] + ';expires=' + oDate
            }
        } else {
            let oDate = new Date()
            oDate.setDate(oDate.getDate() + day)
            document.cookie = key + '=' + value + ';expires=' + oDate
        }
    },
    remove(key) {
        let setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
            setting.forEach(key => {
                this.set(key, 1, -1)
            })
        } else {
            this.set(key, 1, -1)
        }

    }
};


/**
 * 判断是否为移动设备
 */
const isMobile = {
    Android() {
        return (/Android/i).test(navigator.userAgent)
    },
    BlackBerry() {
        return (/BlackBerry/i).test(navigator.userAgent)
    },
    iOS() {
        return (/iPhone|iPad|iPod/i).test(navigator.userAgent)
    },
    Opera() {
        return (/Opera Mini/i).test(navigator.userAgent)
    },
    Windows() {
        return (/IEMobile/i).test(navigator.userAgent)
    },
    any() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
    }
}

module.exports = isMobile.any

//JS判断设备来源
function deviceType() {
    var ua = navigator.userAgent;
    var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var userAgent = 'true';
    for (var i = 0; i < agent.length; i++) {
        if (ua.indexOf(agent[i]) > 0) {
            userAgent = agent[i]
            break;
        }
    }
    return userAgent;
}
deviceType();
window.addEventListener('resize', function () {
    deviceType();
})

//微信的 有些不太一样
function isWeixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
        return true;
    } else {
        return false;
    }
}



// 对象的深浅拷贝
function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}

const obj = /* ... */
    const copy = Object.assign({}, obj);


//深复制
function jsonClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function copy(obj1, obj2) {
    var obj2 = obj2 || {}; //最初的时候给它一个初始值=它自己或者是一个json
    for (var name in obj1) {
        if (typeof obj1[name] === "object") { //先判断一下obj[name]是不是一个对象
            obj2[name] = (obj1[name].constructor === Array) ? [] : {}; //我们让要复制的对象的name项=数组或者是json
            copy(obj1[name], obj2[name]); //然后来无限调用函数自己 递归思想
        } else {
            obj2[name] = obj1[name]; //如果不是对象，直接等于即可，不会发生引用。
        }
    }
    return obj2; //然后在把复制好的对象给return出去
}

//数组
array2 = Array.form(array1)
array2 = [...array1];
array2 = Array.form(array1)
array2 = [...array1];
for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
}


//输入法挡住输入框


setTimeout(() => {
    let input = document.getElementById(input);
    input.scrollIntoView(true);
    input.scrollIntoViewIfNeeded();
}, 200);



//输入法弹起隐藏底部


var h = document.body.scrollHeight;
window.onresize = function () {
    if (document.body.scrollHeight < h) {
        document.getElementsByClassName("base-footer")[0].style.display =
            "none";
    } else {
        document.getElementsByClassName("base-footer")[0].style.display =
            "block";
    }
};