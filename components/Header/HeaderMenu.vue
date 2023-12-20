<template>
    <div id="#navbar">
        <v-navigation-drawer
			v-model="openNavMobile"
			fixed
			app
			v-if="$vuetify.breakpoint.smAndDown"
			class="d-flex flex-column"
		>
			<v-list>
				<v-list-item
					v-for="(item, i) in menuEntries"
					:key="i"
					:to="item.to"
					router
					exact
					>	
					<v-list-item-icon class="mr-2">
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title
						class="text-body-2" 
						>
						{{ item.title }}
					</v-list-item-title>
				</v-list-item>			
			</v-list> 
		</v-navigation-drawer> 

		<v-app-bar fixed app elevation="2" color="white" class="pt-1">
			<div class="bar">
				<v-btn
					v-if="$vuetify.breakpoint.smAndDown"
					icon
					data-testid="btn-toggle-menu"
					aria-label="Toggle Menu"
					@click.stop="handleToggleOpen"
				>
					<v-icon>mdi-menu</v-icon>
				</v-btn>
				
				<v-row v-if="$vuetify.breakpoint.mdAndUp" class="d-flex mt-0 pt-0">
					
					<v-col cols="1" class="justify-center align-center">
						<nuxt-link to="/" aria-label="Home" class="text-caption">
							<p>FAIRification <br> Tool Discoverer</p>
						</nuxt-link>
					</v-col>
					<v-col cols="10">
						<div class="d-flex justify-center">
							<v-btn
								v-for="(item, index) in menuEntries"
								:key="index"
								:to="item.to"
								active-class="active-btn"
								text
							>
								{{ item.title }}
							</v-btn>
						</div>
					</v-col>
					<v-col cols="1">
					</v-col>

						
				</v-row>
			</div>
		</v-app-bar>
	</div>
</template>
<style scoped>

.nuxt-link-active {
	font-size: 1rem !important;
	font-weight: 900 !important;
	text-decoration: none !important;
	color: #757575 !important;
	
}

.bar {
	width: 98%;
	margin-left: auto;
	margin-right: auto;
}

.active-btn {
	color: #3949AB !important;
	background-color: none !important;
}


#bottom-drawer-list {
	bottom: 0;
	width: 100%;
}

</style>
<script>
import menuEntries from './menuEntries';
import logo from '../../static/img/logo-clean.png';

export default {
    name: 'HeaderMenu',
    components: {
		menuEntries
    },
    data() {
        return {
            openNavMobile: false,
            menuEntries,
            logo,
        };
    },
	methods: {
		handleToggleOpen() {
			this.openNavMobile = !this.openNavMobile;
		}
	},
};

</script>
