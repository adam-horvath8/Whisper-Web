<script lang="ts" setup>
import { useUsersStore } from "~/stores/users";
import type { userType } from "~/types";

const user = ref<userType>();

const { getUsers } = useGetUsers();

const authStore = useAuthStore();

const usersStore = useUsersStore();

const fetchAndSetUser = async () => {
  if (authStore.currentUser) {
    await getUsers();
    user.value = usersStore.getSpecificUser(authStore.currentUser.id);
    console.log(user.value);
  }
};

onMounted(fetchAndSetUser);
</script>

<template>
  <div class="rounded-3 bg-white p-3 shadow-low">
    <div class="d-flex gap-4">
      <UiProfileImg :user="user" :big="true" />
      <div class="flex-column d-flex">
        <span>{{ user?.profile?.name }} {{ user?.profile?.surname }}</span>
        <NuxtLink
          :to="`/profile/${authStore.currentUser?.id}`"
          class="text-decoration-none"
          >{{ `@${authStore.currentUser?.username}` }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
