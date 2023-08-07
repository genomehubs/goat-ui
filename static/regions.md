# Regions

Select a country to display a summary of genome sequencing progress:

:::select{id="country_list" helperText="2-letter country code" current="{{country_list}}" enumValues="country_list" url="/regions/country_list?country_list="}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

> The list of known species for each country is based on the intersection of the list of [GBIF occurrences](https://www.gbif.org/occurrence/download/0127528-230530130749713) and the [NCBI taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) so does not represent a definitive species list.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Number of species sequenced by country

```report
report: histogram
x: tax_tree(2759[Eukaryota]) AND country_list
rank: species
cat: assembly_level=contig,scaffold,chromosome,complete genome
includeEstimates: true
xOpts: ",,10"
stacked: true
pointSize: 15
result: taxon
taxonomy: ncbi
caption: "Number of species known to occur and with publicly available genome assemblies for the 10 countries with the most species sequenced"
ratio: 1.5
item: true
xs: 12
```
