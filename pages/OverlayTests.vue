<template>
  <div>
    <v-dialog v-model="showCard" width="500">
      <Share />
    </v-dialog>
  </div>
</template>

<script>
import Share from '~/components/dialogs/Share'
export default {
  components: {
    Share,
  },
  data: () => ({
    showCard: true,
  }),
}
</script>

<style lang="scss" scoped></style>
