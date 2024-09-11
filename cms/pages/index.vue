<template>
  <div class="container mx-auto">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
          <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div class="mt-5 flex lg:mt-0 lg:ml-4 py-2">
          <button
            type="button"
            @click="createArticle"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            Create New Article
          </button>
        </div>
      </div>
    </div>
    <main>
      <TabPanel @tabClicked="tabClicked" />

      <!--   table  -->
      <div class="pt-6 px-4" v-if="tabId === 1">
        <Table title="Draft">
          <ArticleRow
            v-for="article in sortArticles('draft')"
            :article="article"
            :key="article.id"
          />
        </Table>

        <Table title="In Review">
          <ArticleRow
            v-for="article in sortArticles('review')"
            :article="article"
            :key="article.id"
          />
        </Table>

        <Table title="Ready">
          <ArticleRow
            v-for="article in sortArticles('ready')"
            :article="article"
            :key="article.id"
          />
        </Table>
      </div>

      <div class="pt-2 px-4" v-if="tabId === 2">
        <Table title="">
          <ArticleRow
            v-for="article in reviewArticles"
            :article="article"
            :key="article.id"
          />
        </Table>
      </div>

      <div class="pt-2 px-4" v-if="tabId === 3">
        <Table title="">
          <ArticleRow
            v-for="article in readyArticles"
            :article="article"
            :key="article.id"
          />
        </Table>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const tabId = ref(1);
const articles = ref([]);
const reviewArticles = ref([]);
const readyArticles = ref([]);

const sortArticles = (status: any) => {
  return articles.value.filter((article) => {
    return article.status === status;
  });
};

const createArticle = async () => {
  try {
    const article: any = await $fetch(`/cms`);
    useRouter().push({ path: `/articles/${article.data.id}` });
  } catch (e) {
    console.log(e);
  }
};

const tabClicked = (tabId: { value: any }) => {
  tabId.value = tabId;
};

onMounted(() => {
  async () => {
    try {
      const article: any = await $fetch(`cms/`);
      articles.value = await article.json();

      if (["editor", "admin"].includes($store.state.auth.user.role)) {
        const reviewArticle: any = await $fetch("cms/review");
        reviewArticles.value = await reviewArticle.json();
      }

      if ($store.state.auth.user.role === "admin") {
        const readyArticle: any = await $fetch("cms/ready");
        readyArticles.value = await readyArticle.json();
      }
    } catch (e) {
      console.log(e);
    }
  };
});

definePageMeta({
  middleware: "main-auth",
  layout: "dashboard",
});
</script>
