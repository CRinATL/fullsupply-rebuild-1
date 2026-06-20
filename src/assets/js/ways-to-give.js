/* Ways to Give — accessible tabbed giving methods. */
(function () {
  "use strict";

  var root = document.querySelector("[data-wtg-tabs]");
  if (!root) return;

  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));

  function activate(tab, setFocus) {
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute("aria-selected", selected ? "true" : "false");
      t.tabIndex = selected ? 0 : -1;
      t.classList.toggle("is-active", selected);
    });
    panels.forEach(function (p) {
      var match = p.id === tab.getAttribute("aria-controls");
      p.hidden = !match;
      p.classList.toggle("is-active", match);
    });
    if (setFocus) tab.focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      activate(tab, false);
    });
    tab.addEventListener("keydown", function (e) {
      var idx = i;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        idx = (i + 1) % tabs.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        idx = (i - 1 + tabs.length) % tabs.length;
      } else if (e.key === "Home") {
        idx = 0;
      } else if (e.key === "End") {
        idx = tabs.length - 1;
      } else {
        return;
      }
      e.preventDefault();
      activate(tabs[idx], true);
    });
  });
})();
