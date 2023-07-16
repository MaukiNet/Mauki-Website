<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    }
}

console.log('%c ACHTUNG! STOP!', ['color: red','display: block','font-size: 50px'].join(';'))
console.log('%c Wenn dir jemand gesagt hat, dass du etwas heraus kopieren sollst/hier einfügen sollst, hast du eine 11/10 Chance, dass du gescammt wirst!', ['font-size: 15px'].join(';'))
console.log('%c Wenn du nicht 100% weißt, was du tust, schließe dieses Fenster!', ['font-size: 15px'].join(';'))
</script>

<template>
    <title>Home - mauki.net</title>
    <Navbar></Navbar>
        <main class="content">
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Erlebe die Streaming-Welt von KikiYT90!</h2>
                        <p class="mb-4 font-light">Mit den ständigen Ideen und neues Projekten von MaukiNet gibt es kontinuierlich Spaß und Abwechslung im Stream.</p>
                        <p class="mb-4 font-medium">Das Team gibt tagtäglich sein Bestes, um allen ein einzigartiges Erlebnis zu schenken, und jeden Tag auf's neue Spaß zu haben.</p>
                        <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                            Öffne Twitch
                            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>
            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">3.543</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Discord-Mitglieder</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">453.567</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Subs</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">5</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Team-Mitglieder</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </main>
    <Footer></Footer>
</template>