# Algolia quick start

**Prerequisites**

- An Algolia account. If you don't have one already, [create an account for free](https://www.algolia.com/users/sign_up).
- Node & [npx](https://www.npmjs.com/package/npx)

## 1. Create your first Algolia Index

Algolia will search through any set of data, as long as it’s structured. This is what we call an `index`.
The items are broken down into individual records (`objects`), with each object containing a set of fields (`attributes`).

Exemple of a single `object`, representing an e-commerce product:
```json
{
    "objectID": 1,
    "name": "Samsung Galaxy",
    "description": "Samsung Galaxy Express 3 4G LTE with 8GB Memory Prepaid Cell Phone",
    "brand": "AT&T GoPhone",
    "categories": [
        "Cell Phones"
    ],
    "price": 49.99,
    "image": "https://cdn-demo.algolia.com/bestbuy-0118/4984700_sb.jpg",
    "popularity": 21449
}
```

As you can see, this is just like plain, old JSON :)

### Pick your dataset

Choose one of the provided dataset:

- [Blog](./datasets/blog.json)
- [E-commerce](./datasets/ecommerce.json)

### Create your index

**Upload your data**

You will now create a new `index` from your dataset.
There are two main ways you can achieve this:

- On the [Algolia Dashboard](https://www.algolia.com/dashboard) by just uploading your JSON file
- By using on the [Algolia API Clients](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/ecosystem/#using-the-api-clients)

([Algolia Documentation](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/#pushing-your-data-to-an-algolia-index))

For this workshop, we will go the quick and easy way, and we will upload the chosen dataset directly from the [Algolia Dashboard](https://www.algolia.com/dashboard).

Done?

**Configure your index**

1. Ranking

[The 8 Ranking Criteria](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/ranking-criteria/)

2. Relevance

[Defining Relevance](https://www.algolia.com/doc/guides/managing-results/relevance-overview/in-depth/defining-relevance/)

1. Faceting

[Faceting](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/)
[How to Declare Attributes for Faceting](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/how-to/declaring-attributes-for-faceting/#using-the-dashboard)

Feels free to play around and explore your newly created index from the Algolia Dashboard!

**Links**
- [What Is Algolia?](https://www.algolia.com/doc/guides/getting-started/what-is-algolia/)
- [How Algolia Works](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/)
- [Quick Start](https://www.algolia.com/doc/guides/getting-started/quick-start/)
- [Sending data to Algolia](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#sending-data-to-algolia)

## 2. Create your frontend application

**Prerequisites**

- [Your Application ID](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-with-the-api/#application-id)
- Your Index Name
- [Your Search API Key](https://www.algolia.com/doc/guides/security/api-keys/)

You can find all of the above in the [Algolia Dashboard](https://www.algolia.com/dashboard).

If you didn't complete the previous step you can use the following:
- Application ID: `N66N7FOPGI`
- Search API Key: `41bc8ab6cb33007df5f2e3e41796cfa9`
- Index Name: `demo_ecommerce`

**InstantSearch**

InstantSearch is an open-source, production-ready UI library that lets you quickly build a search interface in your front-end application. It's available in multiple flavors: Vanilla, React, Vue, Angular, iOS and Android.

For this workshop, we will use the [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) CLI (inspired by `create-react-app`).

Let's get started with the following (replace the `<appId>`, `<apiKey>` and `<indexName>`):

```
npx create-instantsearch-app my-app --template "React InstantSearch" --app-id <appId> --api-key <apiKey> --index-name <indexName>
```

Alternatively, using `yarn`:
```
yarn create instantsearch-app my-app --template "React InstantSearch" --app-id <appId> --api-key <apiKey> --index-name <indexName>
```

TODO:
- Display records images
- Add another widget?

**Links**
- [What Is React InstantSearch?](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
- [Widgets Showcase](https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/react/)
- [API Keys/security](https://www.algolia.com/doc/guides/building-search-ui/going-further/api-keys-security/react/)
- [Demos](https://www.algolia.com/doc/guides/building-search-ui/resources/demos/react/)

## 3. Collect user's activity data (Analytics)

**Prerequisites**

- Configured Index
- React InstantSearch application
- Analytics API Key 

Collecting user's activity data is the prerequisites for many of Algolia powerful features like [Recommend](https://www.algolia.com/doc/ui-libraries/recommend/introduction/what-is-recommend/), [AI Re-Ranking](https://www.algolia.com/doc/guides/algolia-ai/re-ranking/), [personalization](https://www.algolia.com/doc/guides/personalization/what-is-personalization/) and [A/B testing](https://www.algolia.com/doc/guides/ab-testing/what-is-ab-testing/)

We will implement the `clickedObjectIDsAfterSearch` event in our React InstantSearch application by following [this tutorial](https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/react/).

You can check and debug your event sending on the [Events hub](https://www.algolia.com/doc/guides/sending-events/validating/#events-hub) in your Algolia Dashboard.

**Links**
- [Getting Started with Events](https://www.algolia.com/doc/guides/sending-events/getting-started/)
- [Improve Results with Analytics](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/improve-relevance-with-analytics/)
- [Click and Conversion Analytics](https://www.algolia.com/doc/guides/getting-analytics/search-analytics/advanced-analytics/)
- [Analytic Metrics and Reports](https://www.algolia.com/doc/guides/getting-analytics/search-analytics/understand-reports/)

## 4. Personalize the search results using Analytics data

As the Personalization feature require a reasonable number of events to be sent, this part will be presented.

**Links**
- [What Is Personalization?](https://www.algolia.com/doc/guides/personalization/what-is-personalization/)
- [Personalizing Results](https://www.algolia.com/doc/guides/personalization/personalizing-results/)
- [Configuring Personalization](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/)