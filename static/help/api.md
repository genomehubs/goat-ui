<!--
Content to display at /search
-->

::breadcrumbs[GoaT API]

The GoaT API underpins all the functionality of this site and can be queried directly to support automated and bulk data retrieval.

To get started with the GoaT API, check out the [interactive documentation](https://goat.genomehubs.org/api-docs/ "external:") or try the examples below.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## /search endpoint

The URLs on this site can be easily mapped to API requests by adding `/api/v2/` to the beginning of the URL path, so a search for [`tax_tree(chiroptera) AND assembly_span >= 2000000000`](/search?query=tax_tree%28chiroptera%29%20AND%20assembly_span%20%3E%3D%202000000000&result=taxon&taxonomy=ncbi) would have an API URL of [https://goat.genomehubs.org/api/v2/search?query=tax_tree%28chiroptera%29%20AND%20assembly_span%20%3E%3D%202000000000&result=taxon&taxonomy=ncbi](https://goat.genomehubs.org/api/v2/search?query=tax_tree%28chiroptera%29%20AND%20assembly_span%20%3E%3D%202000000000&result=taxon&taxonomy=ncbi "external:")

:::grid{container direction="row" spacing="1" class="padded"}
:::

## /record endpoint

You can retrieve all information for a taxon or assembly (equivalent to the [record view](/record?recordId=9657&result=taxon&taxonomy=ncbi)) from the API `/record` endpoint by providing its assembly ID or taxon ID.

- To get all the information stored in GoaT for NCBI taxonomy ID 9657 (_Lutra lutra_, European river otter): [https://goat.genomehubs.org/api/v2/record?recordId=9657&result=taxon&taxonomy=ncbi](https://goat.genomehubs.org/api/v2/record?recordId=9657&result=taxon&taxonomy=ncbi "external:")

- To get information about an INSDC assembly with accession GCA_902655055.2: [https://goat.genomehubs.org/api/v2/record?recordId=GCA_902655055.2&result=assembly&taxonomy=ncbi](https://goat.genomehubs.org/api/v2/record?recordId=GCA_902655055.2&result=assembly&taxonomy=ncbi "external:")
