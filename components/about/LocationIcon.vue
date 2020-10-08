<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="90.402"
    height="146.102"
    viewBox="0 0 90.402 146.102"
  >
    <defs>
      <filter
        id="pinpoint"
        x="0"
        y="0"
        width="90.402"
        height="146.102"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="12" dy="20" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#pinpoint)">
      <path
        id="pinpoint-2"
        data-name="pinpoint"
        d="M112.732,74.22C93.744,74.22,78.06,91.868,78.06,113.3a42.927,42.927,0,0,0,3.551,17.213l1.9,3.651,29.28,57.161,28.919-56.442.361-.7a1.718,1.718,0,0,1,.209-.416l.475-.927h0l1.063-2.081h0a42.889,42.889,0,0,0,3.646-17.4C147.424,91.868,131.758,74.22,112.732,74.22Zm0,50.9a11.973,11.973,0,1,1,11.184-12.768v.813a11.6,11.6,0,0,1-11.184,11.954Z"
        transform="translate(-78.06 -74.22)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  // props: [color],
}
</script>