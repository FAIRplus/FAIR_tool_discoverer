<template>
    <div>
        <v-data-table
        :headers="inputsHeaders"
        :items="inputParameters"
        :items-per-page="10"
        class="elevation-1 mx-auto"
        style="width: 35%"
        hide-default-footer
        >
        <template v-slot:[`body`]="{ items }">
            <tbody>
                <tr
                    v-for="(item, key) in items" :key=index
                    >
                    <td class="text-caption">
                        {{ formatTerm(item.keyword) }}
                    </td>
                    <td class="text-caption">
                        {{ formatNumber(item.weight) }}
                    </td>
                </tr>
            </tbody>
        </template>
    </v-data-table>
    </div>
    
</template>

<script>

export default {
    name: 'InputTermsTable',
    props: ['inputParameters'],
    data () {
        return {
            inputsHeaders: [
                {text: 'Keyword', value: 'keyword', width: '40%'},
                {text: 'Weight', value: 'weight', width: '5%'}
            ]
        }
    },
    methods: {
        formatTerm (term) {
            return term.charAt(0).toUpperCase() + term.slice(1);
        },
        formatNumber (num) {
            return parseFloat(num).toFixed(2)
        }
    }
}

</script>