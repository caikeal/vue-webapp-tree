<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app'
};
</script>

<style lang="scss">
@import './assets/sass/base/normalize.scss';
@import './assets/sass/base/mobile.scss';
@import './assets/sass/base/base.scss';

.router-fade-enter-active, .router-fade-leave-active {
	transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
}
body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
