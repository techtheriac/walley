<template>
  <div class="container__wallet white--text px-12 py-8">
    <div class="balance--wallet a card__wallet d-flex flex-column">
      <span>Wallet Balance</span>
      <b class="wallet--balance">N 21,000</b>

      <div
        :class="[
          'wrapper-status',
          'd-flex',
          'justify-space-between',
          'flex-gap-sm',
          this.$vuetify.breakpoint.smAndDown ? 'flex-column' : 'flex-row',
        ]"
      >
        <div class="amount received">
          <div class="d-flex">
            <span class="icon-wrapper icon-received">
              <v-icon class="icon-reset" style="transform: rotate(120deg)"
                >mdi-arrow-left</v-icon
              >
            </span>
            <div class="d-flex flex-column ml-2">
              <b>140,000.00</b>
              <small>Received</small>
            </div>
          </div>
          <v-btn class="my-3" @click="showWithdrawDialog">Withdraw</v-btn>
        </div>

        <div class="amount spent">
          <div class="d-flex">
            <span class="icon-wrapper icon-spent">
              <v-icon class="icon-reset" style="transform: rotate(-45deg)"
                >mdi-arrow-left</v-icon
              >
            </span>
            <div class="d-flex flex-column ml-2">
              <b>140,000.00</b>
              <small>Spent</small>
            </div>
          </div>
          <v-btn class="mt-3" @click="showFundWalletDialog">Fund Wallet</v-btn>
        </div>
      </div>
    </div>

    <div
      class="card--wallet b card__wallet d-flex flex-column justify-space-between"
    >
      <div>
        <img
          src="/mastercard.png"
          width="64"
          height="64"
          alt="master-card-logo"
        />
      </div>
      <div class="wrapper-cardNumber d-flex justify-space-between">
        <b>****</b>
        <b>****</b>
        <b>****</b>
        <b>2233</b>
      </div>
      <div class="wrapper-cvv d-flex justify-space-between">
        <small>Expires 10/12</small>
        <small>CVV 102</small>
      </div>
    </div>

    <div class="card-add c card__wallet d-flex align-center justify-center">
      <div class="d-flex align-center flex-column">
        <div class="font-weight-bold text-h4">Add Card</div>
        <small style="color: var(--secondary); cursor: pointer"
          >click to add</small
        >
      </div>
    </div>

    <div class="table--wallet d">
      <div class="d-flex justify-space-between">
        <b>Wallet History</b>
        <small>View all Report</small>
      </div>
      <v-data-table
        dense
        :headers="headers"
        :items="transactions"
        item-key="name"
        class="elevation-1"
      >
      </v-data-table>
    </div>

    <!-- DIALOGS -->
    <v-dialog v-model="showFundWallet" width="500">
      <FundWallet @hide-fund-dialog="hideFundWalletDialog" />
    </v-dialog>

    <v-dialog v-model="showWithdraw" width="500">
      <Withdraw @hide-withdraw-dialog="hideWithdrawDialog" />
    </v-dialog>
  </div>
</template>

<script>
import FundWallet from '~/components/dialogs/FundWallet'
import Withdraw from '~/components/dialogs/Withdraw'
export default {
  components: {
    FundWallet,
    Withdraw,
  },
  data() {
    return {
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Transactions', value: 'transactionDetails' },
        { text: 'Type', value: 'transactionType' },
        { text: 'Status', value: 'transactionStatus' },
        { text: 'Amount', value: 'transactionAmount' },
      ],
      transactions: [
        {
          date: 'Today',
          transactionDetails: 'This is just a minor accumulation of text',
          transactionType: 'Card Payment',
          transactionStatus: 'Received',
          transactionAmount: 'N1,300',
        },
        {
          date: 'Today',
          transactionDetails: 'This is just a minor accumulation of text',
          transactionType: 'Card Payment',
          transactionStatus: 'Received',
          transactionAmount: 'N1,300',
        },
        {
          date: 'Today',
          transactionDetails: 'This is just a minor accumulation of text',
          transactionType: 'Card Payment',
          transactionStatus: 'Received',
          transactionAmount: 'N1,300',
        },
        {
          date: 'Today',
          transactionDetails: 'This is just a minor accumulation of text',
          transactionType: 'Card Payment',
          transactionStatus: 'Received',
          transactionAmount: 'N1,300',
        },
      ],
      showFundWallet: false,
      showWithdraw: false,
    }
  },
  methods: {
    hideFundWalletDialog(e) {
      this.showFundWallet = e
    },
    showFundWalletDialog() {
      this.showFundWallet = true
    },
    hideWithdrawDialog(e) {
      this.showWithdraw = e
    },
    showWithdrawDialog() {
      this.showWithdraw = true
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .container__wallet {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr auto;
    grid-template-areas: 'a b c' 'd d d';
    gap: 1.2em;
  }

  .a {
    grid-area: a;
  }

  .b {
    grid-area: b;
  }

  .c {
    grid-area: c;
  }

  .d {
    grid-area: d;
  }
}

@media screen and (max-width: 600px) {
  .wrapper-cardNumber b {
    font-size: 1.3rem;
  }
}

.container__wallet > * {
  margin-bottom: 1.3em;
}

.balance--wallet {
  > * + * {
    margin-top: 0.75em;
  }
}

.card__wallet {
  background-color: var(--surface);
  padding: 1.5em;
  border-radius: 10px;
}
.wallet--balance {
  font-size: 2rem;
  font-weight: bold;
}
.amount {
  display: flex;
  flex-direction: column;

  b {
    font-size: 0.78em;
  }
}
.icon-wrapper {
  padding: 2px 5px;
  border-radius: 2px;
}
.icon-received {
  background-color: #00c645;
}
.icon-spent {
  background-color: #c63500;
}

.wrapper-cardNumber > * {
  font-size: 2rem;
}

.icon-reset {
  font-size: 14px;
}
</style>
