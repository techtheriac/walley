<template>
  <div class="container__report px-12 py-8">
    <div class="wrapper-total-expense d-flex flex-column justify-space-between">
      <nuxt-link to="/wallet">
        <v-icon>mdi-arrow-left</v-icon>
        <small>back</small>
      </nuxt-link>

      <div class="summary-expense d-flex flex-column">
        <div class="align-self-start">
          <b>Total Expenses</b> <br />
          <small>This week</small>
        </div>
        <h3 class="align-self-center">N20,000.00</h3>
      </div>

      <div class="d-flex justify-space-between">
        <div class="expense-item">
          <div class="d-flex flex-column">
            <small>Income</small>
            <b>140,000</b>
          </div>
          <v-icon class="icon-reset">mdi-arrow-up</v-icon>
        </div>

        <div class="expense-item">
          <div class="d-flex flex-column">
            <small>Expenses</small>
            <b>120,000</b>
          </div>
          <v-icon class="icon-reset red">mdi-arrow-down</v-icon>
        </div>
      </div>
    </div>

    <div class="wrapper-expense d-flex flex-column">
      <b>Expense Breakdown</b>
      <div v-for="i in 13" :key="i">
        <div class="details-expense d-flex justify-space-between align-center">
          <div class="date-expense d-flex flex-column align-center">
            <small>22</small>
            <small>Apr</small>
          </div>
          <div class="description-expense d-flex flex-column">
            <b>Lorem ipsum dolor sit amet.</b>
            <small>Toby Kurman</small>
          </div>
          <small class="amount-expense">-N 900</small>
        </div>
      </div>
    </div>
    <div class="wrapper-chart">
      <v-card class="mx-auto text-center" color="#121212" dark max-width="">
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .12)">
            <v-sparkline
              :value="value"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
            >
              <template v-slot:label="item"> ${{ item.value }} </template>
            </v-sparkline>
          </v-sheet>
        </v-card-text>

        <!-- <v-card-text>
          <div class="display-1 font-weight-thin">Sales Last 24h</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn block text> Go to Report </v-btn>
        </v-card-actions> -->
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .container__report {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    grid-template-rows: 350px auto;
    gap: 1.5em;
  }

  .wrapper-chart {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  .wrapper-expense {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .wrapper-total-expense {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
}

.date-expense {
  background-color: var(--background);
  border-radius: 5px;
  padding: 2px 5px;
}

.wrapper-expense {
  background-color: var(--surface);
  padding: 1em;
  overflow-y: scroll;
  border-radius: 10px;

  > * + * {
    margin-top: 0.89em;
  }
}

.amount-expense {
  color: tomato;
}

.summary-expense {
  background-color: var(--surface);
  padding: 5em;
  border-radius: 5px;
  position: relative;

  > div {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}

.expense-item {
  background-color: var(--surface);
  display: flex;
  align-items: flex-end;
  padding: 5px 10px;
  border-radius: 5px;

  > div {
    margin-right: 60px;
  }

  > :not(div) {
    padding: 4px;
    border-radius: 50%;
    background-color: green;
  }

  .red {
    background-color: tomato;
  }
}

.icon-reset {
  font-size: 14px;
}
</style>
