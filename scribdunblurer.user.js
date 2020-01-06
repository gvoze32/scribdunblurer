// ==UserScript==
// @name         Scribd Unblurer
// @namespace    gvoze32/scribdunblurer
// @version      1.0
// @description  Scribd document pages unblurer
// @author       gvoze32
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match        *://*.scribd.com/document/*
// ==/UserScript==

setInterval(function() {
 $('.absimg').css('opacity', '1.0');
 $('.autogen_class_views_read2_page_blur_promo').remove();
 $('.between_page_ads').remove();
 $('.outer_page only_ie6_border blurred_page').remove();
 $('.page_blur_promo').remove();
 $('.promo').remove();
 $('.page-blur-promo-overlay').remove();
 $('.page_missing_explanation_inner').remove();
 $('.text_layer').css('color', '#000');
 $('.text_layer').css('text-shadow', '0px 0px 0px #000');
}, 1000);
