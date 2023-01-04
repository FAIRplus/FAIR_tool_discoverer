<template>
  <v-footer class="footer">
    <v-row justify="space-between" class="ma-3 text-caption pr-5 pl-5 text--secondary">
        <div class="item-foot">
        <a href="https://europa.eu/" target="_blank"><img src="@/assets/img/eu-flag.png" alt="EU flag" class="logo" loading="lazy"></a>
        <a href="https://www.imi.europa.eu/" target="_blank"><img src="@/assets/img/imi-logo.png" alt="IMI logo" class="logo" loading="lazy"></a>
        <a href="https://efpia.eu" target="_blank"><img src="@/assets/img/efpia-logo.png" alt="EFPIA logo" class="logo" loading="lazy"></a>
        </div>
        <div class="item-foot copyright">
         Contact <a href="mailto:inb.hub@bsc.es">inb.hub@bsc.es</a> <br> Copyright © <a href="https://www.bsc.es/" target="_blank">BSC-CNS</a> 2022
        </div>
        <div class="item-foot">
              This project has received funding from the <a href="https://www.imi.europa.eu/">Innovative Medicines Initiative</a> Joint Undertaking under grant agreement No 802750.
              This Joint Undertaking receives support from the European Union’s Horizon 2020 research and innovation programme and EFPIA Companies.<br>
              This communication reflects the views of the authors and neither IMI nor the European Union, EFPIA or any Associated Partners are liable for any use that may be made of the information contained herein.
        </div>
    </v-row>
  </v-footer>
</template>

<style scoped>

  .logo{
    margin: 1em;
    margin-top: 0%;
    height: 3.5em;
  }
  .copyright{
    font-size: .7rem
  }

</style>
<script>

export default {
  name: 'Footer'
}
</script>
