<template>
    <td class="text-body-2 text-center">
        {{ licenses[0] }}
    </td>
</template>

<script>
import VueAxios from 'vue-axios';

export default {
    name: 'LicenseCol',
    props: ['licenses']
}
</script>

<style>

</style>