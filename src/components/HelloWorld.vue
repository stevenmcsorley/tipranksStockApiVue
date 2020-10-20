<template>
  <div class="hello">
 <div class="dev-grid-wrapper__div--column--3">
   <div></div>
   <div>
    <input type="search" v-model="stockSymbolName" /><button class="dev-btn" @click="getStock">Get</button>
    </div>
 </div>
 <div class="dev-grid-wrapper__div--column--0">
   <div>
     <p>{{this.priceTargets.description}}</p>
   </div>
 </div>

 <div class="dev-grid-wrapper__div--column--4">
   <div class="dev-card-base dev-u-padding-default dev-flex-column" v-for="(expert, index) in this.priceTargets.experts" :key="index">
     <div class="dev-card-base__header dev-u-padding-default">{{expert.name}} / {{expert.firm}}</div>
                 <div
              class="dev-card-base__body dev-u-padding-default"
              style="height:100%" v-for="(op, index) in expert.ratings" :key="index">
       <p>{{op.quote.title}}</p>
       <p>{{op.quote.date}}</p>
       </div>

   </div>
 </div>

    <!-- <p>{{this.priceTargets}}</p> -->

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import tipranksApi from 'tipranks-api-v2'

import RepositoryFactory from '../repo/repoFactory'
const stocksApi = RepositoryFactory.get('stocksApi')

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  private stockSymbolName = ''
  private priceTargets = ''

  mounted () {
    // this.getStock()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getStock () {
    // tipranksApi.getPriceTargets('MU').then((result: any) => {
    //   return console.log(result)
    // })

    console.log('e', this.stockSymbolName)

    const result = await stocksApi.getPriceTargets(this.stockSymbolName)
    this.priceTargets = result.data

    console.log('e', await this.priceTargets)
  }
}
</script>
