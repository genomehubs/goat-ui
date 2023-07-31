Attribute values can be included in a search to refine the query.

- [`tax_tree(chiroptera) AND assembly_level`](/search?query=tax_tree%28chiroptera%29%20AND%20assembly_level&result=taxon&taxonomy=ncbi) - all bats with an available assembly

- [`tax_tree(chiroptera) AND assembly_span >= 2000000000`](/search?query=tax_tree%28chiroptera%29%20AND%20assembly_span%20%3E%3D%202000000000&result=taxon&taxonomy=ncbi) - all bats with an assembly span of at least 2Gb.

The active search index affects which attributes are available, toggle the boxes below to view details of the available attributes for each index.

:::grid{container direction="row" toggle title="Taxon attributes" spacing="1"}

::report{report="types" result="taxon" item xs=12 .paragraph}

:::

:::grid{container direction="row" toggle title="Assembly attributes" spacing="1"}

::report{report="types" result="assembly" item xs=12 .paragraph}

:::

:::grid{container direction="row" toggle title="Sample attributes" spacing="1"}

::report{report="types" result="sample" item xs=12 .paragraph}

:::
