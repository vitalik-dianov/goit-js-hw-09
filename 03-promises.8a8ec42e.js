!function(){function e(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(t.target.delay.value),o=Number(t.target.step.value),r=Number(t.target.amount.value),u=1;u<=r;u+=1)e(u,n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),n+=o}))}();
//# sourceMappingURL=03-promises.8a8ec42e.js.map
