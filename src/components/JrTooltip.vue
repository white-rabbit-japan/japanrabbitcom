<template functional>
  <span
    :data-tooltip="props.tooltip || ''"
    :class="[$style.tooltip, $style[props.direction] || '']"
  >
    <slot />
  </span>
</template>

<style lang="scss" module>
$bg-color: theme('colors.primary.DEFAULT');
$text-color: theme('colors.gray.DEFAULT');

.tooltip {
  position: relative;
  cursor: pointer;
}

/* Base styles for the tooltip's directional arrow */
.tooltip::before {
  z-index: 1001;
  content: '';
  background: transparent;
  border: 6px solid transparent;
}

/* Base styles for the tooltip's content area */
.tooltip::after {
  z-index: 1000;
  width: 238px;
  padding: 16px;
  font-size: 14px;
  line-height: 1.3;
  color: $text-color;
  word-wrap: break-word;
  white-space: pre-line;
  content: attr(data-tooltip);
  background-color: $bg-color;
  border-radius: 4px;
}

/* Base styles for the entire tooltip */
.tooltip::before,
.tooltip::after {
  position: absolute;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
    transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  transform: translate3d(0, 0, 0);
}

/* Top (default) */
.tooltip::before,
.tooltip::after,
.top::before,
.top::after {
  bottom: 100%;
  left: 50%;
}

.tooltip::before,
.top::before {
  margin-bottom: -12px;
  margin-left: -6px;
  border-top-color: #000;
  border-top-color: hsla(0, 0%, 20%, 0.9);
}

/* Horizontally align top/bottom tooltips */
.tooltip::after,
.top::after {
  margin-left: -80px;
}

/* Show the entire tooltip on hover and focus */
.tooltip:hover::before,
.tooltip:hover::after,
.tooltip:focus::before,
.tooltip:focus::after {
  visibility: visible;
  opacity: 1;
}

.tooltip:hover::before,
.tooltip:hover::after,
.tooltip:focus::before,
.tooltip:focus::after,
.top:hover::before,
.top:hover::after,
.top:focus::before,
.top:focus::after {
  transform: translateY(-12px);
}

/** Directions **/

.left::before,
.right::before {
  top: 3px;
}

/* Vertically center tooltip content for left/right tooltips */
.left::after,
.right::after {
  margin-bottom: -16px;
  margin-left: 0;
}

/* Left */
.left::before,
.left::after {
  right: 100%;
  bottom: 50%;
  left: auto;
}

.left::before {
  margin-right: -12px;
  margin-bottom: 0;
  margin-left: 0;
  border-top-color: transparent;
  border-left-color: $bg-color;
}

.left:hover::before,
.left:hover::after,
.left:focus::before,
.left:focus::after {
  transform: translateX(-12px);
}

/* Right */
.right::before,
.right::after {
  right: auto;
  bottom: 50%;
  left: 100%;
}

.right::before {
  margin-right: 0;
  margin-bottom: 0;
  margin-left: -12px;
  border-top-color: transparent;
  border-right-color: $bg-color;
}

.right:hover::before,
.right:hover::after,
.right:focus::before,
.right:focus::after {
  transform: translateX(12px);
}
</style>
