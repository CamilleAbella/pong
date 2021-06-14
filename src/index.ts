/// @ts-check
/// <reference path="../node_modules/@types/p5/global.d.ts" />

import Ball from "./Ball"

document.addEventListener("contextmenu", (event) => event.preventDefault())

export function setup() {
  createCanvas(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  )

  Ball.create(3)
}

export function draw() {
  background(20)

  Ball.draw()
}

export function keyPressed() {}
export function keyReleased() {}
