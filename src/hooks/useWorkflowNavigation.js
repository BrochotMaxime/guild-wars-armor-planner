import { useState } from "react";

function useWorkflowNavigation(initialStep) {
  const [activeStep, setActiveStep] = useState(initialStep);

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function scrollToElement(targetId, nextActiveStep = activeStep) {
    const shouldWaitForTransition = activeStep !== nextActiveStep;
    const shouldReduceMotion = prefersReducedMotion();

    setActiveStep(nextActiveStep);

    window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      function scrollToTarget() {
        const breadcrumb = document.querySelector(".breadcrumb");
        const breadcrumbHeight = breadcrumb?.offsetHeight ?? 0;
        const spacingBelowBreadcrumb = 16;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          breadcrumbHeight -
          spacingBelowBreadcrumb;

        window.scrollTo({
          top: targetPosition,
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      }

      if (!shouldWaitForTransition || shouldReduceMotion) {
        scrollToTarget();
        return;
      }

      const workflow = target.closest(".workflow");

      if (!workflow) {
        scrollToTarget();
        return;
      }

      let fallbackTimeout;

      function handleTransitionEnd(event) {
        if (event.propertyName !== "grid-template-rows") {
          return;
        }

        workflow.removeEventListener("transitionend", handleTransitionEnd);
        window.clearTimeout(fallbackTimeout);

        window.requestAnimationFrame(scrollToTarget);
      }

      workflow.addEventListener("transitionend", handleTransitionEnd);

      fallbackTimeout = window.setTimeout(() => {
        workflow.removeEventListener("transitionend", handleTransitionEnd);
        scrollToTarget();
      }, 400);
    });
  }

  function scrollToWorkflowStep(step, nextActiveStep = step) {
    scrollToElement(`${step}-step`, nextActiveStep);
  }

  function toggleWorkflowStep(step) {
    const nextActiveStep = activeStep === step ? null : step;

    scrollToWorkflowStep(step, nextActiveStep);
  }

  function returnToWorkflowStart() {
    setActiveStep(initialStep);

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  return {
    activeStep,
    scrollToElement,
    scrollToWorkflowStep,
    toggleWorkflowStep,
    returnToWorkflowStart,
  };
}

export default useWorkflowNavigation;
