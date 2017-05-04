<template>
    <header>
        <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAAwCAMAAABJ9zR3AAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAgEDAEPAw0GAgoHCwkFDg8Jfk/AAAAuJJREFUaN7tmdl2pCAQQGXfXPj/r50ZJ1SBpShtjHaf3KdUhD5cEKqa7r4Jy2ZO9bbdYxFx5lzv5/od12NLLPSOA3nIoR+PGazrYg2hL9E78Kl0KKi3gm/RQ8Qlekqf1KPoFj3kAr0a/FU9/v564XP0xJLhX2YQBAUdq9jFrrCX6IV9vUa0wo77E8twJFfoSXFSj8LNS3r8S++ZODtKmLNxMB+k56yf4l/MkCnKj9BLaglUfHu9XI0o3qYnLTuKrdScuRrF6DQHDAjyJ/RMPI7HomwHdSCtK3m9no0t6CN6qg+66zgTe1VLuF6PNelx0KupAaC4rsfeSi9XKxQfoGdYjWmpxwi5GlV0+dEy/LiekQ2l42lsox5njaDesXGz79SjNlotJtkXeiw2clbP9Soep9dberHCjXomNqHke+nFRviv3q/eRXpyWtczPMPEGTVyxO/oLZqFxWelg4w3stTzdb2eVi00W3LMZoiv6gHm4qrF821GKI5BZ83Ers0UX9d7ZM0Zuppeqtzcm+qJrqIn+9TMuOfo2ZdyM9XTU9ZwfIyeVHUnOmiqR18CLx+i12kvDsFkt6knBb1ceYheM1RvVLBquIrhU/QGfH3zPdjLZ+jx4kugTpEsHzLdZeARqQ0crG5+UT3YcjhQb9Rz6dUa4KjBqC/PCwBaWFXenNB/hXv1RDoNivLLyCwCYwDX5ospE3CwoLC+N+nhka7cPNUp0mtJcUQ9ITuy0ZChyCZyeFVPns4LaSC2iMIcqc3EHopkpwLZz6p4pUf92lWSOeknpzT9c2QgKm4c4A+RdxUkye0/tYcvAvF+0r0qh5trmqfJF6s04GvLFRkRJrthfYrD9mX7ET2En6849Tzi4gM57DjSkOwuCtmZN+g5WBQaYYYgy0yTHYWmQKoXtvX0eT3cXIJmCIzIJi0zWw3aUOz8AAb483oOCpQickWk03xiY8fw4Q7YlP/33fj50qY2ALZ0fwABP9zXu8UgWQAAAABJRU5ErkJggg==">
        <span class='title'>广告平台</span>
    </header>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style lang='styl'>
    header 
        position absolute
        height 80px
        width: 100%
        background #009bf5
        left 0
        top 0
        padding 0 20px
        z-index 1
        box-sizing border-box
        :before
            display inline-block
            content ''
            vertical-align middle
            height 100%
        .logo 
            display inline
            vertical-align middle 
            width 100px
        span
            diaplay inline-block
            vertical-align middle
            margin-left 20px
            color #ffffff

</style>