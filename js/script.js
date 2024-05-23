// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan
// Created on: May 2024
// This file contains the JS functions for index.html
let clicks = parseInt(localStorage.getItem("click-count")) || 0

function update_cookie() {
  document.getElementById("click-count").innerHTML = clicks
}
// Im hungry
function cookie_cook() {
  clicks++
  update_cookie()
  localStorage.setItem("click-count", clicks)
}
 