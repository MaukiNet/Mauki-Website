<script lang="ts">
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        Navbar
    }
}

console.log('%c ACHTUNG! STOP!', ['color: red','display: block','font-size: 50px'].join(';'))
console.log('%c Wenn dir jemand gesagt hat, dass du etwas heraus kopieren sollst/hier einfügen sollst, hast du eine 11/10 Chance, dass du gescammt wirst!', ['font-size: 15px'].join(';'))
console.log('%c Wenn du nicht 100% weißt, was du tust, schließe dieses Fenster!', ['font-size: 15px'].join(';'))
</script>

<template>
    <Navbar></Navbar>
    <main>
        <p>Home!</p>
    </main>
</template>