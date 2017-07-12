(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

window.init = function init() {

    var date = new Date(),
        now = date.getTime(),
        bar = document.querySelector(".bar");

    date.setHours(12 + parseInt(document.querySelector("#hour").value));
    date.setMinutes(parseInt(document.querySelector("#minute").value));

    function tick(b, s, e) {

        var now = Date.now(),
            duration = e - s,
            progress = now - s,
            percent = 100 * (progress / duration).toFixed(16);

        document.title = "Progress " + Math.round(percent) + "%";
        b.setAttribute("style", "width:" + percent + "%;");

        setTimeout(function () {

            tick(b, s, e);
        }, 1000);
    }
    tick(bar, Date.now(), date.getTime());
    document.body.removeChild(document.forms[0]);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL29wZW5zL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkM6L0NvZGUvc3JjL2dpdGh1Yi5jb20vU3BhY2VIZXhhZ29uL3Byb2dyZXNzL2NsaWVudC9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLElBQUksR0FBSTs7QUFFM0IsUUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDcEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRXhDLFFBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDbkUsUUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBOztBQUVsRSxhQUFTLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7QUFFcEIsWUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQixRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDaEIsUUFBUSxHQUFJLEdBQUcsR0FBRyxDQUFDLEFBQUM7WUFDcEIsT0FBTyxHQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUEsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEFBQUMsQ0FBQTs7QUFFdkQsZ0JBQVEsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ3hELFNBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUE7O0FBRWxELGtCQUFVLENBQUUsWUFBTTs7QUFFZCxnQkFBSSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUE7U0FFbEIsRUFBRSxJQUFJLENBQUMsQ0FBQTtLQUNYO0FBQ0QsUUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7QUFDckMsWUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBRS9DLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwid2luZG93LmluaXQgPSBmdW5jdGlvbiBpbml0ICgpIHtcclxuXHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCksXHJcbiAgICAgICAgbm93ID0gZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXJcIilcclxuXHJcbiAgICBkYXRlLnNldEhvdXJzKDEyICsgcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob3VyXCIpLnZhbHVlKSlcclxuICAgIGRhdGUuc2V0TWludXRlcyhwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbnV0ZVwiKS52YWx1ZSkpXHJcblxyXG4gICAgZnVuY3Rpb24gdGljayAoYiwgcywgZSkge1xyXG5cclxuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgZHVyYXRpb24gPSBlIC0gcyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAobm93IC0gcyksXHJcbiAgICAgICAgICAgIHBlcmNlbnQgPSAoMTAwICogKHByb2dyZXNzIC8gZHVyYXRpb24pLnRvRml4ZWQoMTYpKVxyXG5cclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZ3Jlc3MgXCIgKyBNYXRoLnJvdW5kKHBlcmNlbnQpICsgXCIlXCJcclxuICAgICAgICBiLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6XCIgKyBwZXJjZW50ICsgXCIlO1wiKVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aWNrKCBiLCBzLCBlIClcclxuXHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuICAgIHRpY2soYmFyLCBEYXRlLm5vdygpLCBkYXRlLmdldFRpbWUoKSlcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZm9ybXNbMF0pXHJcblxyXG59Il19
