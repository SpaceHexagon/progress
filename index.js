(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _styleJs = require("./style.js");

var applyStyle = _styleJs.applyStyle;
var styles = _styleJs.styles;

var ProgressBar = (function () {
    function ProgressBar() {
        var config = arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ProgressBar);

        var elem = document.createElement("div"),
            container = document.querySelector(config.selector || "#progress-bar");

        if (container) {

            container.appendChild(elem);
        } else {

            document.body.appendChild(elem);
        }

        applyStyle(elem, Object.assign({}, styles.bar, config.style ? config.style : {}));
        this.elem = elem;
        this.value = 0;
        this.startTime = null;
        this.endTime = null;
        this.hideOnComplete = config.hideOnComplete == true ? true : false;
    }

    _createClass(ProgressBar, {
        start: {
            value: function start(endTime) {

                var date = new Date(),
                    now = date.getTime(),
                    pm = false;

                if (endTime) {

                    this.endTime = endTime;
                    this.startTime = Date.now();
                }

                this.tick();
            }
        },
        update: {
            value: function update(progress) {

                var percent = (100 * progress).toFixed(16);
                this.value = progress;
                this.elem.style.width = percent + "%";
            }
        },
        configure: {
            value: function configure(data) {

                if (data.hidden !== undefined) {
                    this.elem.style.display = data.hidden ? "none" : "block";
                }
            }
        },
        tick: {
            value: function tick() {
                var _this = this;

                var now = Date.now(),
                    duration = this.endTime - this.startTime,
                    progress = now - this.startTime,
                    percent = 0;

                //document.title = `${Math.round(percent)}% Done`
                if (this.value) {
                    percent = (100 * this.value).toFixed(16);
                } else {
                    percent = (100 * (progress / duration)).toFixed(16);
                }

                this.elem.style.width = percent + "%";

                if (percent >= 100) {

                    if (this.hideOnComplete) this.elem.style.display = "none";
                } else {

                    setTimeout(function () {
                        _this.tick();
                    }, 1000);
                }
            }
        }
    });

    return ProgressBar;
})();

window.ProgressBar = ProgressBar;

module.exports = ProgressBar;

},{"./style.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = {
    bar: {
        height: "48px",
        background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 20px, rgba(0, 0, 0, 0.2) 20px, rgba(0, 0, 0, 0.2) 40px ), linear-gradient(#00ff00, #00BB00)",
        "box-shadow": "0px 0px 10px #00ff00",
        transition: "all 0.333s ease-out",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        margin: "auto"
    }
};

exports.styles = styles;
var applyStyle = function (element, style) {

    Object.keys(style).map(function (key) {
        element.style[key] = style[key];
    });
};
exports.applyStyle = applyStyle;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL29wZW5zL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkM6L0NvZGUvc3JjL2dpdGh1Yi5jb20vU3BhY2VIZXhhZ29uL3Byb2dyZXNzL3NyYy9tYWluLmpzIiwiQzovQ29kZS9zcmMvZ2l0aHViLmNvbS9TcGFjZUhleGFnb24vcHJvZ3Jlc3Mvc3JjL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3VCQ0dPLFlBQVk7O0lBRmYsVUFBVSxZQUFWLFVBQVU7SUFDVixNQUFNLFlBQU4sTUFBTTs7SUFHSixXQUFXO0FBRUYsYUFGVCxXQUFXLEdBRWM7WUFBZCxNQUFNLGdDQUFHLEVBQUU7OzhCQUZ0QixXQUFXOztBQUlULFlBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUksZUFBZSxDQUFDLENBQUE7O0FBRTNFLFlBQUssU0FBUyxFQUFHOztBQUViLHFCQUFTLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxDQUFBO1NBRWhDLE1BQU07O0FBRUgsb0JBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxDQUFBO1NBRXBDOztBQUVELGtCQUFVLENBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBRSxDQUFFLENBQUE7QUFDcEYsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsWUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7QUFDZCxZQUFJLENBQUMsU0FBUyxHQUFHLElBQUks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QztBQUNULFlBQUksRUFBRSxDQUFDO0FBQ1AsY0FBTSxFQUFFLE1BQU07S0FDaEI7Q0FDSixDQUFBOztRQVpVLE1BQU0sR0FBTixNQUFNO0FBY1YsSUFBSSxVQUFVLEdBQUcsVUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFNOztBQUUxQyxVQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsRUFBRztBQUN6QixlQUFPLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQTtLQUN0QyxDQUFDLENBQUE7Q0FFTCxDQUFBO1FBTlUsVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgXHJcbiAgICBhcHBseVN0eWxlLFxyXG4gICAgc3R5bGVzXHJcbn0gZnJvbSAnLi9zdHlsZS5qcydcclxuXHJcbmNsYXNzIFByb2dyZXNzQmFyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggY29uZmlnID0ge30gKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggY29uZmlnLnNlbGVjdG9yIHx8IFwiI3Byb2dyZXNzLWJhclwiKVxyXG5cclxuICAgICAgICBpZiAoIGNvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbSApXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBlbGVtIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGFwcGx5U3R5bGUoIGVsZW0sIE9iamVjdC5hc3NpZ24oe30sIHN0eWxlcy5iYXIsIGNvbmZpZy5zdHlsZSA/IGNvbmZpZy5zdHlsZSA6IHt9ICkgKVxyXG4gICAgICAgIHRoaXMuZWxlbSA9IGVsZW1cclxuICAgICAgICB0aGlzLnZhbHVlID0gMFxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IG51bGxcclxuICAgICAgICB0aGlzLmhpZGVPbkNvbXBsZXRlID0gY29uZmlnLmhpZGVPbkNvbXBsZXRlID09IHRydWUgPyB0cnVlIDogZmFsc2VcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCBlbmRUaW1lICkge1xyXG5cclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIG5vdyA9IGRhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBwbSA9IGZhbHNlXHJcblxyXG4gICAgICAgIGlmICggZW5kVGltZSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWVcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aWNrKCApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoIHByb2dyZXNzICkge1xyXG5cclxuICAgICAgICBsZXQgcGVyY2VudCA9ICgxMDAgKiBwcm9ncmVzcykudG9GaXhlZCgxNilcclxuICAgICAgICB0aGlzLnZhbHVlID0gcHJvZ3Jlc3NcclxuICAgICAgICB0aGlzLmVsZW0uc3R5bGUud2lkdGggPSBwZXJjZW50ICsgXCIlXCJcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlICggZGF0YSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkYXRhLmhpZGRlbiAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0uc3R5bGUuZGlzcGxheSA9IGRhdGEuaGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGljayAoICApIHtcclxuXHJcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUsXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gKG5vdyAtIHRoaXMuc3RhcnRUaW1lKSxcclxuICAgICAgICAgICAgcGVyY2VudCA9IDBcclxuXHJcbiAgICAgICAgLy9kb2N1bWVudC50aXRsZSA9IGAke01hdGgucm91bmQocGVyY2VudCl9JSBEb25lYFxyXG4gICAgICAgIGlmICggdGhpcy52YWx1ZSApIHtcclxuICAgICAgICAgICAgcGVyY2VudCA9ICgxMDAgKiB0aGlzLnZhbHVlKS50b0ZpeGVkKDE2KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBlcmNlbnQgPSAoMTAwICogKHByb2dyZXNzIC8gZHVyYXRpb24pKS50b0ZpeGVkKDE2KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtLnN0eWxlLndpZHRoID0gcGVyY2VudCArIFwiJVwiXHJcblxyXG4gICAgICAgIGlmICggcGVyY2VudCA+PSAxMDAgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaGlkZU9uQ29tcGxldGUgKSBcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMudGljaygpIH0sIDEwMDApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5Qcm9ncmVzc0JhciA9IFByb2dyZXNzQmFyXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFByb2dyZXNzQmFyIiwiZXhwb3J0IGxldCBzdHlsZXMgPSB7ICAgICAgIFxyXG4gICAgYmFyOiB7XHJcbiAgICAgICBoZWlnaHQ6ICc0OHB4JyxcclxuICAgICAgIGJhY2tncm91bmQ6IFwicmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCggNDVkZWcsIHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjEpIDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgNDBweCApLCBsaW5lYXItZ3JhZGllbnQoIzAwZmYwMCwgIzAwQkIwMClcIixcclxuICAgICAgIFwiYm94LXNoYWRvd1wiOiBcIjBweCAwcHggMTBweCAjMDBmZjAwXCIsXHJcbiAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzM3MgZWFzZS1vdXRcIixcclxuICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICB0b3A6IDAsXHJcbiAgICAgICBib3R0b206IDAsXHJcbiAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhcHBseVN0eWxlID0gKCBlbGVtZW50LCBzdHlsZSApID0+IHtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhzdHlsZSkubWFwKGtleT0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlWyBrZXkgXSA9IHN0eWxlWyBrZXkgXVxyXG4gICAgfSlcclxuICAgXHJcbn0iXX0=
