"use strict";
// ==UserScript==
// @name         屏蔽百度贴吧超长评论
// @namespace    https://github.com/qianjiachun
// @version      2022.09.29.01
// @description  屏蔽、缩短百度贴吧超长评论（超过50行）
// @author       小淳
// @match			*://tieba.baidu.com/p/*
// ==/UserScript==

const MAX_LINE = 50; // 帖子最大行数，超过这个值将会被缩短

function init() {
  let timer = setInterval(() => {
    let dom = document.getElementsByClassName("d_post_content");
    if (dom.length > 0) {
      clearInterval(timer);
      killLongPosts();
    }
  }, 300);
}

function killLongPosts() {
  let posts = document.getElementsByClassName("d_post_content");
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let brCount = post.innerHTML.split("br").length;
    if (brCount >= MAX_LINE) {
      post.innerHTML = post.innerHTML.replace(/<br>/g, "").replace(/<br\/>/g, "").replace(/<br \/>/g, "");
    }
  }
}

(function () {
  init();
})()