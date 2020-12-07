<template>
  <div>
    <v-dialog v-model="showCard" width="500">
      <Withdraw />
    </v-dialog>
  </div>
</template>

<script>
import Withdraw from '~/components/dialogs/Withdraw'
export default {
  components: {
    Withdraw,
  },
  data: () => ({
    showCard: true,
  }),
}
</script>

<style lang="scss" scoped></style>
