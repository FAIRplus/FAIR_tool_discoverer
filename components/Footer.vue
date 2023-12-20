<template>
  <v-footer class="pt-0">
    <v-row justify="space-between" class="ma-3 text--secondary">
      <v-col cols="1">
          <v-img 
            :src="figure" 
            contain
            class="ml-0 figure"
            max-height="100"
            max-width="100"></v-img>
            <h5 class="mt-1 ml-1 text-subtitle darkgrey--text title">FAIRification <br> Tool Discoverer</h5>
      </v-col>
      <v-col cols="3" class="text-body">
        <h4>Contact</h4>
        <p>
          Please get in touch with us by creating an issue in our <a href="https://github.com/FAIRplus/FAIR_tool_discoverer_backend/issues" target="_blank">GitHub repository</a>. 
          <br>
          We welcome feedback regarding:
          <ul>
          <li>Errors in the outcome</li>
          <li>Recommending tools or implementation examples.</li>
          <li>FAIRification use cases</li>
          <li>Others</li>
          </ul>
        </p>
      </v-col>
      <v-col cols="2" class="text-body">
        <h4>Acknowledgements</h4>
        <p>
          This software is developed by 
                <a href="https://bsc.es" target="_blank">BSC-CNS<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>
                and
                <a href="https://ebi.ac.uk" target="_blank">EMBL-EBI<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>
                , and funded by the 
                <a href="https://fairplus-project.eu/" target="_blank">IMI FAIRplus project<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>.
        </p>
        <v-space></v-space>
        <h4>Licensing</h4>
        <p>
          The software is deployed under the <a href="https://github.com/FAIRplus/FAIR_tool_discoverer/blob/main/LICENSE.md" target="_blanck">Apache 2.0 license</a>.
        </p>

      </v-col>
      <v-col cols="5" class="text-caption">
        <a href="https://europa.eu/" target="_blank"><img src="@/static/img/eu-flag.png" alt="EU flag" class="logo" loading="lazy"></a>
        <a href="https://www.imi.europa.eu/" target="_blank"><img src="@/static/img/imi-logo.png" alt="IMI logo" class="logo" loading="lazy"></a>
        <a href="https://efpia.eu" target="_blank"><img src="@/static/img/efpia-logo.png" alt="EFPIA logo" class="logo" loading="lazy"></a>
        <p>
          This project has received funding from the <a href="https://www.imi.europa.eu/">Innovative Medicines Initiative</a> Joint Undertaking under grant agreement No 802750.
          This Joint Undertaking receives support from the European Union’s Horizon 2020 research and innovation programme and EFPIA Companies.<br>
          This communication reflects the views of the authors and neither IMI nor the European Union, EFPIA or any Associated Partners are liable for any use that may be made of the information contained herein.
        </p>
      </v-col>
        

    </v-row>
  </v-footer>
</template>

<style scoped> 

 .figure{
  opacity: 0.7;
 }

  .title{
    font-size: .8em !important;
    line-height: normal;
    font-weight: 400;
  }

  .logo{
    margin: 1em;
    margin-top: 0%;
    height: 3.5em;
  }

</style>
<script>

export default {
  name: 'Footer',
  data(){
    return {
      figure: require('../static/img/logo-clean-grey.svg'),
    }
  }
}
</script>
