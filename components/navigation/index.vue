<template>
  <nav
    :class="[
      'd-flex',
      'flex-row',
      'grey',
      'darken-4',
      'white--text',
      'pt-6',
      'px-12',
      'align-baseline',
      'container__navigation',
      this.$vuetify.breakpoint.smAndDown ? 'justify-space-between' : '',
    ]"
  >
    <nuxt-link to="/">
      <PaywallLogo />
    </nuxt-link>

    <v-menu offset-y>
      <template
        v-slot:activator="{
          on,
          attrs,
        }"
      >
        <span class="small--text" v-bind="attrs" v-on="on">CATEGORIES</span>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in categories"
          :key="index"
          class="px-8"
        >
          <v-list-item-title>
            <nuxt-link :to="item.link">{{
              item.title
            }}</nuxt-link></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <v-text-field
      v-if="this.$vuetify.breakpoint.lgAndUp"
      class="mr-4"
      dark
      append-icon="mdi-magnify"
      placeholder="search"
      background-color="#424242"
      filled
      rounded
      dense
    ></v-text-field>

    <div
      v-if="this.$vuetify.breakpoint.lgAndUp"
      class="container__nav-actions d-flex"
    >
      <!-- UPLOAD VERIFICATION DIALOG START-->
      <v-dialog v-model="dialog" width="500">
        <div
          style="background-color: var(--surface)"
          class="d-flex flex-column py-2"
        >
          <v-icon class="align-self-end mx-4" @click="dialog = false"
            >mdi-close-circle-outline</v-icon
          >
        </div>
        <UploadVerification />
      </v-dialog>
      <!-- UPLOAD VERIFICATION DIALOG END -->
      <div
        to="/"
        class="group__icon-upload d-flex flex-column"
        v-bind="attrs"
        v-on="on"
        @click="dialog = true"
      >
        <img src="/plus.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">upload</span>
      </div>

      <nuxt-link to="/golive" class="group__icon-live d-flex flex-column">
        <img src="/live.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">go live</span>
      </nuxt-link>

      <nuxt-link
        to="/discoverstreams"
        class="group__icon-streams d-flex flex-column"
      >
        <img src="/stream.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">streams</span>
      </nuxt-link>

      <nuxt-link to="/wallet" class="group__icon-wallet d-flex flex-column">
        <img src="/wallet.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">wallet</span>
      </nuxt-link>

      <div class="vl-divider"></div>
    </div>

    <div v-if="this.$vuetify.breakpoint.lgAndUp" class="d-flex group--account">
      <nuxt-link to="/notifications">
        <v-icon class="grey--text">mdi-bell</v-icon>
      </nuxt-link>
      <btn-primary>
        <nuxt-link to="/signin">Login</nuxt-link>
      </btn-primary>
    </div>

    <v-app-bar-nav-icon
      v-if="this.$vuetify.breakpoint.smAndDown"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <!-- MOBILE -->
    <v-navigation-drawer
      v-model="drawer"
      width="100%"
      height="60%"
      absolute
      bottom
      temporary
    >
      <div>
        <h1>Hello</h1>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PaywallLogo from '~/components/legos/PaywallLogo'
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
import UploadVerification from '~/components/dialogs/UploadVerification'
export default {
  components: {
    PaywallLogo,
    BtnPrimary,
    UploadVerification,
  },
  data() {
    return {
      menuItems: [
        { title: 'Ticket' },
        { title: 'Live Streams' },
        { title: 'Uploaded Streams' },
        { title: 'Find Friends' },
        { title: 'Settings' },
      ],
      categories: [
        { title: 'Business', link: '/categories' },
        { title: 'Cooking', link: '/categories' },
        { title: 'Fitness', link: '/categories' },
        { title: 'Software', link: '/categories' },
        { title: 'Fashion', link: '/categories' },
        { title: 'Kids', link: '/categories' },
        { title: 'Design', link: '/categories' },
      ],
      dialog: false,
      drawer: false,
      group: null,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.container__navigation {
  width: 100%;
}
.container__nav-actions {
  > * + * {
    margin-left: 2em;
  }
}
.small--text {
  font-size: 12px;
  font-weight: bold;
  margin: 0 calc(2px + 0.9vw);
}

.icon-label {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  transform: translateX(-5px);

  &:hover {
    color: var(--secondary);
    cursor: pointer;
  }
}

.vl-divider {
  border-left: 1px solid grey;
  height: 50px;
  margin-left: 1.5em;
  padding: 0;
}
.group--account {
  > * {
    margin-left: 1em;
  }
}
</style>
