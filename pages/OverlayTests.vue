<template>
  <div>
    <v-dialog v-model="showCard" width="500">
      <RemoveCard />
    </v-dialog>
  </div>
</template>

<script>
import RemoveCard from '~/components/dialogs/RemoveCard'
export default {
  components: {
    RemoveCard,
  },
  data: () => ({
    showCard: true,
  }),
}
</script>

<style lang="scss" scoped></style>
