<script lang="ts" setup>
import { useUsersStore } from "~/stores/users";

const usersStore = useUsersStore();

const { getUsers, isLoading } = useGetUsers();

const emit = defineEmits(["close:modal"]);

const handleEmit = () => {
  emit("close:modal");
};

onMounted(() => {
  getUsers();
});
</script>

<template>
  <div class="p-md-3 bg-white my-2 rounded-3 shadow-low">
    <h5>Connect</h5>
    <ConnectInput />
    <ConnectUsers
      :users="usersStore.searchUsers"
      @click="handleEmit"
      :is-loading="isLoading"
    />
  </div>
</template>

<style lang="css" scoped></style>
