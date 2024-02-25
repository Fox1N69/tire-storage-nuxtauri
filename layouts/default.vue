<template>
  <section class="grid" style="min-height: 100vh;">
    <LayoutSidebar />
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 14% 6fr;
}
</style>