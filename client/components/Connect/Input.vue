<script lang="ts" setup>
import { useUsersStore } from '~/stores/users';

const searchTerm = ref("");

const usersStore = useUsersStore()

const handleSearch = () => {
  usersStore.setSearchTerm(searchTerm.value);
};
</script>

<template>
  <div class="input-group">
    <span
      class="input-group-text rounded-start-pill bg-transparent"
      id="basic-addon1"
      ><i class="bi bi-search"></i
    ></span>
    <input
      v-model="searchTerm"
      @input="handleSearch"
      class="form-control rounded-end-pill"
      type="text"
      placeholder="Search User..."
      aria-label="readonly input example"
    />
  </div>
</template>

<style lang="css" scoped></style>
