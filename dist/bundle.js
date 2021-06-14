var app = (() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    draw: () => draw,
    keyPressed: () => keyPressed,
    keyReleased: () => keyReleased,
    setup: () => setup
  });

  // src/Ball.ts
  var _Ball = class {
    constructor() {
      this.position = createVector(random(width), random(height));
      this.velocity = createVector(random(-5, 5), random(-5, 5));
      this.radius = random(10, 30);
    }
    static create(count) {
      for (let i = 0; i < count; i++) {
        this.balls.push(new _Ball());
      }
    }
    static draw() {
      this.balls.forEach((ball) => {
        ball.update();
        ball.draw();
      });
    }
    update() {
      this.position.add(this.velocity);
      if (this.position.y < this.radius || this.position.y > height - this.radius) {
        this.velocity.y *= -1;
      }
      if (this.position.x < this.radius || this.position.x > width - this.radius) {
        this.velocity.x *= -1;
      }
      for (const ball of _Ball.balls) {
        const distance = dist(ball.position.x, ball.position.y, this.position.x, this.position.y);
        if (distance < ball.radius + this.radius) {
          ball.velocity.mult(-1);
          this.velocity.mult(-1);
        }
      }
    }
    draw() {
      fill(255);
      circle(this.position.x, this.position.y, this.radius * 2);
    }
  };
  var Ball = _Ball;
  Ball.balls = [];
  var Ball_default = Ball;

  // src/index.ts
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  function setup() {
    createCanvas(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    Ball_default.create(3);
  }
  function draw() {
    background(20);
    Ball_default.draw();
  }
  function keyPressed() {
  }
  function keyReleased() {
  }
  return src_exports;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2luZGV4LnRzIiwgInNyYy9CYWxsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLy8gQHRzLWNoZWNrXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvQHR5cGVzL3A1L2dsb2JhbC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIlxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICBjcmVhdGVDYW52YXMoXHJcbiAgICBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApLFxyXG4gICAgTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApXHJcbiAgKVxyXG4gIFxyXG4gIEJhbGwuY3JlYXRlKDMpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3KCkge1xyXG4gIGJhY2tncm91bmQoMjApXHJcbiAgXHJcbiAgQmFsbC5kcmF3KClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGtleVByZXNzZWQoKSB7fVxyXG5leHBvcnQgZnVuY3Rpb24ga2V5UmVsZWFzZWQoKSB7fVxyXG4iLCAiXHJcbmRlY2xhcmUgdmFyIHA1OiBhbnlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwge1xyXG4gIHN0YXRpYyBiYWxsczogQmFsbFtdID0gW11cclxuICBcclxuICBzdGF0aWMgY3JlYXRlKGNvdW50OiBudW1iZXIpe1xyXG4gICAgZm9yKGxldCBpPTA7IGk8Y291bnQ7IGkrKyl7XHJcbiAgICAgIHRoaXMuYmFsbHMucHVzaChuZXcgQmFsbCgpKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZHJhdygpe1xyXG4gICAgdGhpcy5iYWxscy5mb3JFYWNoKGJhbGwgPT4ge1xyXG4gICAgICBiYWxsLnVwZGF0ZSgpXHJcbiAgICAgIGJhbGwuZHJhdygpXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBwb3NpdGlvbiA9IGNyZWF0ZVZlY3RvcihcclxuICAgIHJhbmRvbSh3aWR0aCksXHJcbiAgICByYW5kb20oaGVpZ2h0KVxyXG4gIClcclxuICAvLyBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjBcclxuICAvLyBzcGVlZCA9IDVcclxuICB2ZWxvY2l0eSA9IGNyZWF0ZVZlY3RvcihcclxuICAgIHJhbmRvbSgtNSwgNSksXHJcbiAgICByYW5kb20oLTUsIDUpXHJcbiAgKVxyXG4gIHJhZGl1cyA9IHJhbmRvbSgxMCwgMzApXHJcbiAgXHJcbiAgdXBkYXRlKCl7XHJcbiAgICAvLyBjb25zdCB2ZWxvY2l0eSA9IHA1LlZlY3Rvci5mcm9tQW5nbGUocmFkaWFucyh0aGlzLmFuZ2xlKSwgdGhpcy5zcGVlZCk7XHJcbiAgICAvLyB0aGlzLnBvc2l0aW9uLmFkZCh2ZWxvY2l0eSlcclxuICAgIC8vXHJcbiAgICAvLyBpZih0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnJhZGl1cyl7XHJcbiAgICAvLyAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucmFkaXVzICsgMVxyXG4gICAgLy9cclxuICAgIC8vICAgY29uc3QgZGlmZlJlY3QgPSB0aGlzLmFuZ2xlXHJcbiAgICAvLyAgIHRoaXMuYW5nbGVcclxuICAgIC8vIH1cclxuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkpXHJcbiAgICBpZih0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnJhZGl1cyB8fCB0aGlzLnBvc2l0aW9uLnkgPiBoZWlnaHQgLSB0aGlzLnJhZGl1cyl7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueSAqPSAtMVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5wb3NpdGlvbi54IDwgdGhpcy5yYWRpdXMgfHwgdGhpcy5wb3NpdGlvbi54ID4gd2lkdGggLSB0aGlzLnJhZGl1cyl7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueCAqPSAtMVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3IoY29uc3QgYmFsbCBvZiBCYWxsLmJhbGxzKXtcclxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBkaXN0KFxyXG4gICAgICAgIGJhbGwucG9zaXRpb24ueCxcclxuICAgICAgICBiYWxsLnBvc2l0aW9uLnksXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgKVxyXG4gICAgICBcclxuICAgICAgaWYoZGlzdGFuY2UgPCBiYWxsLnJhZGl1cyArIHRoaXMucmFkaXVzKXtcclxuICAgICAgICBiYWxsLnZlbG9jaXR5Lm11bHQoLTEpXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5tdWx0KC0xKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGRyYXcoKXtcclxuICAgIGZpbGwoMjU1KVxyXG4gICAgY2lyY2xlKFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5yYWRpdXMgKiAyXHJcbiAgICApXHJcbiAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDR0Esb0JBQTBCO0FBQUEsSUFBMUIsY0FIQTtBQW1CRSxzQkFBVyxhQUNULE9BQU8sUUFDUCxPQUFPO0FBSVQsc0JBQVcsYUFDVCxPQUFPLElBQUksSUFDWCxPQUFPLElBQUk7QUFFYixvQkFBUyxPQUFPLElBQUk7QUFBQTtBQUFBLFdBdkJiLE9BQU8sT0FBYztBQUMxQixlQUFRLElBQUUsR0FBRyxJQUFFLE9BQU8sS0FBSTtBQUN4QixhQUFLLE1BQU0sS0FBSyxJQUFJO0FBQUE7QUFBQTtBQUFBLFdBSWpCLE9BQU07QUFDWCxXQUFLLE1BQU0sUUFBUSxVQUFRO0FBQ3pCLGFBQUs7QUFDTCxhQUFLO0FBQUE7QUFBQTtBQUFBLElBZ0JULFNBQVE7QUFVTixXQUFLLFNBQVMsSUFBSSxLQUFLO0FBQ3ZCLFVBQUcsS0FBSyxTQUFTLElBQUksS0FBSyxVQUFVLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxRQUFPO0FBQ3pFLGFBQUssU0FBUyxLQUFLO0FBQUE7QUFFckIsVUFBRyxLQUFLLFNBQVMsSUFBSSxLQUFLLFVBQVUsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLFFBQU87QUFDeEUsYUFBSyxTQUFTLEtBQUs7QUFBQTtBQUdyQixpQkFBVSxRQUFRLE1BQUssT0FBTTtBQUMzQixjQUFNLFdBQVcsS0FDZixLQUFLLFNBQVMsR0FDZCxLQUFLLFNBQVMsR0FDZCxLQUFLLFNBQVMsR0FDZCxLQUFLLFNBQVM7QUFHaEIsWUFBRyxXQUFXLEtBQUssU0FBUyxLQUFLLFFBQU87QUFDdEMsZUFBSyxTQUFTLEtBQUs7QUFDbkIsZUFBSyxTQUFTLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUt6QixPQUFNO0FBQ0osV0FBSztBQUNMLGFBQ0UsS0FBSyxTQUFTLEdBQ2QsS0FBSyxTQUFTLEdBQ2QsS0FBSyxTQUFTO0FBQUE7QUFBQTtBQWxFcEI7QUFDUyxFQURULEtBQ1MsUUFBZ0I7QUFEekIsTUFBTyxlQUFQOzs7QURFQSxXQUFTLGlCQUFpQixlQUFlLENBQUMsVUFBVSxNQUFNO0FBRW5ELG1CQUFpQjtBQUN0QixpQkFDRSxLQUFLLElBQUksU0FBUyxnQkFBZ0IsYUFBYSxPQUFPLGNBQWMsSUFDcEUsS0FBSyxJQUFJLFNBQVMsZ0JBQWdCLGNBQWMsT0FBTyxlQUFlO0FBR3hFLGlCQUFLLE9BQU87QUFBQTtBQUdQLGtCQUFnQjtBQUNyQixlQUFXO0FBRVgsaUJBQUs7QUFBQTtBQUdBLHdCQUFzQjtBQUFBO0FBQ3RCLHlCQUF1QjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
