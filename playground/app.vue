<template>
  <div>
    {{ dateFormat }}
  </div>
</template>

<script setup>
const dateFormat = _Format(new Date(2014, 1, 11), "MM/dd/yyyy")
</script>
