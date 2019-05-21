<template>
  <Layout >
    <div class="container my-12 mx-auto px-4 md:px-12">
     <div class="flex flex-wrap -mx-1 lg:-mx-4" v-for="pages in chunkedPages">
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="{node} in pages" :key="node._id">
                   <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" :src="`${node.image}`">
                   </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        <span v-html="node.date"/>
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <p class="ml-2 text-sm">
                            <div v-html="node.description"/>
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>
</div>
</div>
</div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
          image
        }
      }
    }
  }
</page-query>

<script>
import chunk from 'chunk'
export default {
computed: {
  chunkedPages() {
    var pages =  chunk(this.$page.allBlogPost.edges, 3)
    console.log(pages)
    return pages
  }
}
}
</script>