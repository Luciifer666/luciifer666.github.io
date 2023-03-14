var exports = module.exports = {};

var $ = function(id) {
    return document.getElementById(id);
};

// if object is plain object

var _isPlainObject = function(obj) {
    if(typeof obj !== 'object') {
        return false;
    };

    if(obj.constructor && !hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
        return false;
    };

    // if the function hasn't returned already, we're confident that |obj| is a plain object, created by {} or constructed with new Object
    
    return true;
};

//method source from jquery 2.0.x
//merge object's value and return

var extend = function() {
    var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 0, length = arguments.length, deep = true;

    //handle a deep copy situation

    if(typeof target === 'boolean') {
        deep = target;
        
        //skip the boolean and target

        target = arguments[i] || {};
        i++;
    };

    //handle case when target is a string or smth (possible in deep copy)

    if(typeof target !== 'object' && typeof obj !== 'function') {
        target = {};
    };

    if(i === length) {
        target = this;
        i--;
    };

    for(; i < length; i++) {
        //only deal with non-null / undefined values
        if((options = arguments[i]) !== null) {
            //extend the base object
            for(name in options) {
                src = target[name];
                copy = options[name];

                //prevent never-ending loop
                if(target === copy) {
                    continue;
                };

                //recurse if we're merging plain objects or array
                if(deep && copy && (_isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if(copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && _isPlainObject(src) ? src : {};
                    };

                    //never move original objects, clone them
                    //.console.log("abc")

                    target[name] = extend(deep, clone, copy);

                    //don't bring in undefined values
                } else if(copy !== undefined) {
                    target[name] = copy;
                };
            };
        };
    };

    //return the modified object
    return target;
};

var proxy = function(fn, context) {
    var args = [].slice.call(arguments, 2);
    proxy = function() {
        return fn.apply(context || this, args.concat([].slice.call(arguments)));
    };
    return proxy;
};

var aniFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = aniFrame;

exports.$ = $;
exports.extend = extend;
exports.proxy = proxy;