<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-iconF
            class="header-icon q-pa-md lt-md"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />

        </q-toolbar-title>

        <q-toggle
          :false-value="this.$q.dark.set(theme)"
          :true-value="this.$q.dark.set(theme)"
          v-model="theme"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
          color="black"
          class="text-center"
          size="md"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      side="left"
      :width="283"
      bordered
      show-if-above
    >
      <q-icon
        class="q-pa-md"
        name="fas fa-dove"
        size="lg"
        color="primary"
      />

      <q-list>
        <q-item
          to="/"
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item
          to="/about"
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>
        <q-item
          v-ripple
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon name="settings" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Settings</q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input
        placeholder="Search Qwitter"
        class="q-ma-md"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list
        separator
        padding
      >
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">News - Yesterday</q-item-label>
            <q-item-label class="text-weight-bold">Biden issues his first presidential turkey pardon</q-item-label>
            <q-item-label caption>President Biden issued the first pardons of his presidency Friday.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>Yesterday</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">SAINT - Yesterday</q-item-label>
            <q-item-label class="text-weight-bold">Twitter is reacting to Kim Kardashian wearing "Yeezys" while holding Pete Davidson's hand</q-item-label>
            <q-item-label caption>The reaction comes after E! News broke news the to are officially dating.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>Yesterday</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">LA Times - Yesterday</q-item-label>
            <q-item-label class="text-weight-bold">UC slams the door on standardized admissions tests, nixing any SAT alternative</q-item-label>
            <q-item-label caption>The University of California has slammed the door shut on using any standardized test for admissions decisions.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>Yesterday</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  created () {
    this.theme = JSON.parse(localStorage.getItem('theme'))
  },
  data () {
    return {
      left: false,
      right: false,
      theme: ''
    }
  },
  watch: {
    theme () {
      localStorage.setItem('theme', JSON.stringify(this.theme))
    }
  }
}
</script>

<style lang="sass">
  .header-icon
    position: absolute
    bottom: 0
    left: 50%
    transform: translateX(-50%)
</style>
