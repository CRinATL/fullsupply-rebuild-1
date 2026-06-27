/* Global Missions — accessible FAQ accordion (independent toggles). */
(function () {
  "use strict";

  var root = document.querySelector("[data-gm-accordion]");
  if (!root) return;

  var triggers = Array.prototype.slice.call(
    root.querySelectorAll(".gm-acc-trigger")
  );

  function toggle(trigger) {
    var expanded = trigger.getAttribute("aria-expanded") === "true";
    var panel = document.getElementById(
      trigger.getAttribute("aria-controls")
    );
    trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
    if (panel) panel.hidden = expanded;
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      toggle(trigger);
    });
  });
})();
