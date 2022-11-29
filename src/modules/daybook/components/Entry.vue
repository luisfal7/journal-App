<template>
  <div class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">29</span>
      <span class="mx-1 fs-5">noviembre</span>
      <span class="mx-2 fw-light">2022, martes</span>
    </div>
    <div class="entry-description">
        So how did the classical Latin become so incoherent? According to
        McClintock, a 15th century typesetter likely scrambled part of Cicero's De
        Finibus in order to provide placeholder text to mockup various fonts for a
        type specimen book.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
