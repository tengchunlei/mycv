// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
// ??????????????????dom????????????echarts??????
var myChart = echarts.init(document.getElementById('skills'));

// ?????????????????????????????????
var option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        top: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            show: true
        },
        axisTick: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: ['????????????', 'Vue??????', 'React??????', '????????????', '????????????', '????????????']
    },

    series: [{ name: '',
        type: 'bar',
        barWidth: 19,
        data: [80, 75, 90, 90, 75, 90],
        itemStyle: {
            normal: {
                color: 'rgb(14, 131, 205)'
            }
        }
    }]
};

myChart.setOption(option);

/*var option = {
  tooltip: {},
  radar: {
      // shape: 'circle',
      name: {
          textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
          }
      },
      indicator: [
        { name: '????????????', max: 100},
        { name: '????????????', max: 100},
        { name: 'Vue', max: 100},
        { name: 'React', max: 100},
        { name: '????????????', max: 100},
        { name: '????????????', max: 100}
      ]
  },
  series: [{
      name: '?????? vs ?????????Budget vs spending???',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
          {
              value: [100, 70, 90, 80, 85, 70],
              name: '????????????'
          }
      ]
  }]
};
*/
// ???????????????????????????????????????????????????
/*myChart.setOption(option);*/
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f7200823.map