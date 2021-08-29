<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          class="absolute-right"
          icon="account_circle"
          label="Login"
        />
        <q-btn
          v-else
          flat
          class="absolute-right"
          icon="account_circle"
          label="Logout"
          @click="logoutUser"
        />

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar-title>
        <q-tabs>
          <q-route-tab
            v-for="nav in navs"
            :key="nav.id"
            :to="nav.to"
            :icon="nav.icon"
            :label="nav.label"
          />
        </q-tabs>
      </q-toolbar-title>
    </q-footer>

    <q-drawer
      class="bg-primary"
      :width="250"
      :breakpoint="767"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list dark>
        <q-item-label header> Navigation </q-item-label>

        <q-item
          class="text-grey-4"
          v-for="nav in navs"
          clickable
          :to="nav.to"
          :key="nav.id"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MainLayout",
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          id: "1",
          label: "Todo",
          icon: "list",
          to: "/",
        },
        {
          id: "2",
          label: "Settings",
          icon: "settings",
          to: "/settings",
        },
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
};
</script>
<style lang="scss">
.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
