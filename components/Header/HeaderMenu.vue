<template>
    <div>
        <v-navigation-drawer
			v-if="$vuetify.breakpoint.smAndDown"
			v-model="openNavMobile"
			fixed
			app
		>
			<v-list>
				<v-list-item
					v-for="(item, i) in menuEntries"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
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
			
			<v-row v-if="$vuetify.breakpoint.mdAndUp" justify="space-between" class="mt-0 pt-0">
				<v-col cols="2">
					<nuxt-link to="/" aria-label="Home" class="text-caption">
						<p>FAIRification <br> Tool Discoverer</p>
					</nuxt-link>
				</v-col>
				<v-col cols="6" class="text-center">
					<v-btn
						v-for="(item, index) in menuEntries"
						:key="index"
						:to="item.to"
						active-class="active-btn"
						text
					>
						{{ item.title }}
					</v-btn>
				</v-col>
				<v-col cols="1" offset="1">
					<v-menu
						left
					>
						<template v-slot:activator="{ on, attrs }">
						<v-btn
							icon
							small
							v-bind="attrs"
							v-on="on"
							class="mt-1"
						>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
						</template>

						<v-list>
						<v-list-item
							v-for="item in moreOptions"
							:key="item.title"
							@click="() => {}"
						>
							<v-icon small>{{item.icon}}</v-icon>
							<v-list-item-title class="text-caption ml-1">{{ item.title }}</v-list-item-title>
							
						</v-list-item>
						</v-list>
					</v-menu>
				</v-col>
			</v-row>
			<!-- <v-btn v-if="$vuetify.breakpoint.mdAndUp" depressed color="ml-3 primary">
				<v-icon left>mdi-login-variant</v-icon> Login
			</v-btn> -->
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

</style>
<script>
import menuEntries from './menuEntries';
import moreOptions from './moreOptions';
import logo from '../../static/v.png';

export default {
    name: 'HeaderMenu',
    components: {
		menuEntries
    },
    data() {
        return {
            openNavMobile: false,
            menuEntries,
			moreOptions,
            logo,
        };
    },
};

</script>
