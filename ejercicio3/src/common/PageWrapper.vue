<template>
  <div id="main-content" tabIndex="-1">
    <div class="containere">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageWrapper',
};
</script>

<style></style>
