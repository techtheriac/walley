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
    ]"
  >
    <PaywallLogo />

    <span class="small--text">CATEGORIES</span>

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
      <div class="group__icon-upload d-flex flex-column">
        <img src="/plus.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">upload</span>
      </div>

      <div class="group__icon-live d-flex flex-column">
        <img src="/live.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">go live</span>
      </div>

      <div class="group__icon-streams d-flex flex-column">
        <img src="/stream.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">streams</span>
      </div>

      <div class="group__icon-wallet d-flex flex-column">
        <img src="/wallet.svg" width="30px" height="30px" alt="" />
        <span class="icon-label">wallet</span>
      </div>

      <div class="vl-divider"></div>
    </div>
    <div class="d-flex group--account">
      <v-icon class="grey--text">mdi-bell</v-icon>
      <btn-primary>login</btn-primary>
    </div>
  </nav>
</template>

<script>
import PaywallLogo from '~/components/legos/PaywallLogo'
import BtnPrimary from '~/components/legos/buttons/BtnPrimary'
export default {
  components: {
    PaywallLogo,
    BtnPrimary,
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
    }
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
