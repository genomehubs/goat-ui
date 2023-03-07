# Search

Search by taxon name or ID (partial names and misspellings supported)

**Example:** type **chiroptera** in search box

Or try the steps from [our tutorials](/help)
:::grid{container direction="row" spacing="1" class="padded"}
:::

# List of Attributes

[Attributes](/help) can be used as search terms alongside taxa in the search box

**Example:** assembly_span AND tax_name(chiroptera)

:::grid{container direction="row" spacing="1" class="padded"}
:::

\*Result Display is affected by **result columns** selected

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Templates

Use the templates below to explore some of the search options available in :hub

:::templat{id="buscoLineagesByAssembly" title="BUSCO lineages by assembly accession" description="List all relevant BUSCO lineages for an assembly accession" valueA_example="GCA_001883655.1" valueA_label="Assembly accession" valueA_description="Assembly GCA accession" url="/search?query=tax_lineage%28queryA.taxon_id%29&queryA=assembly--assembly_id%3D{valueA}&result=taxon&fields=odb10_lineage&includeEstimates=true&taxonomy=ncbi#tax_lineage%28queryA.taxon_id%29"}
:::

:::templat{id="scatterPlot" title="Scatter plot" description="Plot relationships between attribute values for a taxon" attributeA_example="genome_size" attributeA_label="X axis variable" attributeA_description="Attribute to plot as an x-axis variable" attributeB_example="assembly_span" attributeB_label="Y axis variable" attributeB_description="Attribute to plot as a y-axis variable" attributeC_example="assembly_level" attributeC_label="Category variable" attributeC_description="Attribute to plot as a category variable" taxon_example="Chiroptera" taxon_label="Taxon" taxon_description="Taxon to restrict results to" url="/search?query={attributeA}%20AND%20tax_tree%28{taxon}%29%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&offset=0&fields={attributeC}%2C{attributeB}%2C{attributeA}&names=&ranks=&report=scatter&xField={attributeA}&y={attributeB}&rank=species&cat={attributeC}&highlightArea=y%3Dx&pointSize=15#{attributeA}%20AND%20tax_tree({taxon})%20AND%20tax_rank(species)"}
