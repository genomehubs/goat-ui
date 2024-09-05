<!--
Content to display at
/regions
/project/regions
-->

::breadcrumbs[Regions]

Select a country to display a summary of genome sequencing progress:

:::select{id="countryCode" helperText="2-letter country code" current="{{countryCode}}" enumValues="country_list" url="/regions/country?countryCode="}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

> The list of known species for each country is based on the intersection of the list of [GBIF occurrences](https://www.gbif.org/occurrence/download/0127528-230530130749713) and the [NCBI taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) so does not represent a definitive species list.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Number of species with chromosomal assemblies by country

List of countries ranked by the number of species known to occur that have a publicly available chromosomal genome assembly

```report
report: table
x: country_list AND assembly_level AND country_list AND sequencing_status>=insdc_open AND tax_tree(2759[Eukaryota]) AND assembly_level >= chromosome
xField: country_list
rank: species
includeEstimates: true
xOpts: ;;300
result: taxon
taxonomy: ncbi
caption: ""
disableModal: true
xs: 12
```
