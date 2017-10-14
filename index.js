(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

var applyStyle = function (element, style) {

    Object.keys(style).map(function (key) {
        element.style[key] = style[key];
    });
};

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

                setTimeout(function () {

                    _this.tick();
                }, 1000);
            }
        }
    });

    return ProgressBar;
})();

window.ProgressBar = ProgressBar;

module.exports = ProgressBar;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL29wZW5zL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkM6L0NvZGUvc3JjL2dpdGh1Yi5jb20vU3BhY2VIZXhhZ29uL3Byb2dyZXNzL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsSUFBSSxNQUFNLEdBQUc7QUFDVCxPQUFHLEVBQUU7QUFDRixjQUFNLEVBQUUsTUFBTTtBQUNkLGtCQUFVLEVBQUUsc0tBQXNLO0FBQ2xMLG9CQUFZLEVBQUUsc0JBQXNCO0FBQ3BDLGtCQUFVLEVBQUUscUJBQXFCO0FBQ2pDLGdCQUFRLEVBQUUsVUFBVTtBQUNwQixXQUFHLEVBQUUsQ0FBQztBQUNOLGNBQU0sRUFBRSxDQUFDO0FBQ1QsWUFBSSxFQUFFLENBQUM7QUFDUCxjQUFNLEVBQUUsTUFBTTtLQUNoQjtDQUNKLENBQUE7O0FBRUQsSUFBSSxVQUFVLEdBQUcsVUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFNOztBQUVuQyxVQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsRUFBRztBQUN6QixlQUFPLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQTtLQUN0QyxDQUFDLENBQUE7Q0FFTCxDQUFBOztJQUVLLFdBQVc7QUFFRixhQUZULFdBQVcsR0FFYztZQUFkLE1BQU0sZ0NBQUcsRUFBRTs7OEJBRnRCLFdBQVc7O0FBSVQsWUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDcEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsTUFBTSxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUMsQ0FBQTs7QUFFM0UsWUFBSyxTQUFTLEVBQUc7O0FBRWIscUJBQVMsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFFLENBQUE7U0FFaEMsTUFBTTs7QUFFSCxvQkFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFFLENBQUE7U0FFcEM7O0FBRUQsa0JBQVUsQ0FBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFFLENBQUUsQ0FBQTtBQUNwRixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNoQixZQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtBQUNkLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0FBQ3JCLFlBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO0tBRXRCOztpQkF2QkMsV0FBVztBQXlCYixhQUFLO21CQUFDLGVBQUUsT0FBTyxFQUFHOztBQUVkLG9CQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtvQkFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLEVBQUUsR0FBRyxLQUFLLENBQUE7O0FBRWQsb0JBQUssT0FBTyxFQUFHOztBQUVYLHdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtBQUN0Qix3QkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7aUJBRTlCOztBQUVELG9CQUFJLENBQUMsSUFBSSxFQUFHLENBQUE7YUFFZjs7QUFFRCxjQUFNO21CQUFDLGdCQUFFLFFBQVEsRUFBRzs7QUFFaEIsb0JBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUMxQyxvQkFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7QUFDckIsb0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFBO2FBRXhDOztBQUVELGlCQUFTO21CQUFDLG1CQUFFLElBQUksRUFBRzs7QUFFZixvQkFBSyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRztBQUM3Qix3QkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQTtpQkFDM0Q7YUFFSjs7QUFFRCxZQUFJO21CQUFDLGdCQUFLOzs7QUFFTixvQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVM7b0JBQ3hDLFFBQVEsR0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQUFBQztvQkFDakMsT0FBTyxHQUFHLENBQUMsQ0FBQTs7O0FBR2Ysb0JBQUssSUFBSSxDQUFDLEtBQUssRUFBRztBQUNkLDJCQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtpQkFDM0MsTUFBTTtBQUNILDJCQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQSxDQUFDLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2lCQUN0RDs7QUFFRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUE7O0FBRXJDLDBCQUFVLENBQUMsWUFBTTs7QUFFYiwwQkFBSyxJQUFJLEVBQUUsQ0FBQTtpQkFFZCxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ1g7Ozs7V0EvRUMsV0FBVzs7O0FBbUZqQixNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTs7QUFFaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHN0eWxlcyA9IHsgICAgICAgXHJcbiAgICBiYXI6IHtcclxuICAgICAgIGhlaWdodDogJzQ4cHgnLFxyXG4gICAgICAgYmFja2dyb3VuZDogXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KCA0NWRlZywgcmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkgMjBweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSA0MHB4ICksIGxpbmVhci1ncmFkaWVudCgjMDBmZjAwLCAjMDBCQjAwKVwiLFxyXG4gICAgICAgXCJib3gtc2hhZG93XCI6IFwiMHB4IDBweCAxMHB4ICMwMGZmMDBcIixcclxuICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMzMzcyBlYXNlLW91dFwiLFxyXG4gICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgIHRvcDogMCxcclxuICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgYXBwbHlTdHlsZSA9ICggZWxlbWVudCwgc3R5bGUgKSA9PiB7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLm1hcChrZXk9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVsga2V5IF0gPSBzdHlsZVsga2V5IF1cclxuICAgIH0pXHJcbiAgIFxyXG59XHJcblxyXG5jbGFzcyBQcm9ncmVzc0JhciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGNvbmZpZyA9IHt9ICkge1xyXG5cclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGNvbmZpZy5zZWxlY3RvciB8fCBcIiNwcm9ncmVzcy1iYXJcIilcclxuXHJcbiAgICAgICAgaWYgKCBjb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW0gKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZWxlbSApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhcHBseVN0eWxlKCBlbGVtLCBPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMuYmFyLCBjb25maWcuc3R5bGUgPyBjb25maWcuc3R5bGUgOiB7fSApIClcclxuICAgICAgICB0aGlzLmVsZW0gPSBlbGVtXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IDBcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGxcclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSBudWxsXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICggZW5kVGltZSApIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBub3cgPSBkYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgcG0gPSBmYWxzZVxyXG5cclxuICAgICAgICBpZiAoIGVuZFRpbWUgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGljayggKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKCBwcm9ncmVzcyApIHtcclxuXHJcbiAgICAgICAgbGV0IHBlcmNlbnQgPSAoMTAwICogcHJvZ3Jlc3MpLnRvRml4ZWQoMTYpXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHByb2dyZXNzXHJcbiAgICAgICAgdGhpcy5lbGVtLnN0eWxlLndpZHRoID0gcGVyY2VudCArIFwiJVwiXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZSAoIGRhdGEgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGF0YS5oaWRkZW4gIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtLnN0eWxlLmRpc3BsYXkgPSBkYXRhLmhpZGRlbiA/ICdub25lJyA6ICdibG9jaydcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRpY2sgKCAgKSB7XHJcblxyXG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IChub3cgLSB0aGlzLnN0YXJ0VGltZSksXHJcbiAgICAgICAgICAgIHBlcmNlbnQgPSAwXHJcblxyXG4gICAgICAgIC8vZG9jdW1lbnQudGl0bGUgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQpfSUgRG9uZWBcclxuICAgICAgICBpZiAoIHRoaXMudmFsdWUgKSB7XHJcbiAgICAgICAgICAgIHBlcmNlbnQgPSAoMTAwICogdGhpcy52YWx1ZSkudG9GaXhlZCgxNilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwZXJjZW50ID0gKDEwMCAqIChwcm9ncmVzcyAvIGR1cmF0aW9uKSkudG9GaXhlZCgxNilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS53aWR0aCA9IHBlcmNlbnQgKyBcIiVcIlxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGljaygpXHJcblxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cuUHJvZ3Jlc3NCYXIgPSBQcm9ncmVzc0JhclxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQcm9ncmVzc0JhciJdfQ==
