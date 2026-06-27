/* Partner With Us — accessible FAQ accordion. */
(function () {
  "use strict";

  var root = document.querySelector("[data-pwu-faq]");
  if (!root) return;

  var triggers = Array.prototype.slice.call(
    root.querySelectorAll(".pwu-faq__trigger")
  );

  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (panel) panel.hidden = expanded;
    });
  });
})();
