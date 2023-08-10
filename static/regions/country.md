:::grid{container direction="row" spacing="1" class="padded"}

::flag{countryCode="{{countryCode}}" size=140 item xs=2}

::include{pageId=/regions/country_picker.md xs=10 .negativePadded}

Summary of progress towards the goal of sequencing all described species known to occur in :translated{type="country_list" text="{{countryCode}}"}. The list of known species is based on the intersection of the list of [GBIF occurrences](https://www.gbif.org/occurrence/download/0127528-230530130749713) and the [NCBI taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) so does not represent a definitive species list for :translated{type="country_list" text="{{countryCode}}"}, but provides a consistent basis for assessment of progress across countries.

:::

## Progress towards sequencing the biodiversity of :translated{type="country_list" text="{{countryCode}}"}

### Taxa with chromosomal assemblies

:::grid{container direction="row" spacing="1" class="padded"}

```report
report: arc
x: assembly_level>=chromosome
y: "country_list={{countryCode}}"
rank: phylum,class,order,family,genus,species
includeEstimates: true
caption: "Taxa with chromosomal assemblies out of all taxa with country_list={{countryCode}}"
pointSize: 15
result: taxon
taxonomy: ncbi
item: true
xs: 6
```

::divider

```report
report: table
x: country_list AND assembly_level AND country_list AND sequencing_status>=insdc_open AND tax_tree(2759[Eukaryota]) AND assembly_level >= chromosome
xField: country_list
rank: species
includeEstimates: true
xOpts: ;;300
highlight: "country_list={{countryCode}}"
result: taxon
taxonomy: ncbi
caption: "Number of species with publicly available chromosomal assemblies by country"
disableModal: true
item: true
xs: 6
```

:::

### Taxa with assemblies at any level and total numbers of known taxa in :translated{type="country_list" text="{{countryCode}}"}

:::grid{container direction="row" spacing="1" class="padded"}

```report
report: arc
x: assembly_level
y: "country_list={{countryCode}}"
rank: phylum,class,order,family,genus,species
includeEstimates: true
caption: "Taxa with assemblies out of all taxa with country_list={{countryCode}}"
pointSize: 15
result: taxon
taxonomy: ncbi
item: true
xs: 6
```

::divider

```report
report: xPerRank
x: country_list={{countryCode}}
includeEstimates: true
caption: "Counts of all taxa with country_list={{countryCode}} in GoaT"
item: true
xs: 6
```

:::

### Tree representing the eukaryotic orders present in :translated{type="country_list" text="{{countryCode}}"} highlighting taxa with publicly available genome assemblies

:::grid{container direction="row" spacing="1" class="padded"}

```report
report: tree
x: tax_rank(order) AND country_list={{countryCode}}
y: assembly-level>=chromosome
includeEstimates: true
collapseMonotypic: true
treeStyle: rect
treeThreshold: 2000
pointSize: 15
result: taxon
taxonomy: ncbi
levels: subspecies,species,genus,family,order,class,phylum
ratio: 3
disableModal: true
caption: "Tree of all eukaryotic orders with country_list={{countryCode}}, highlighting those with at least one chromosomal assembly"
item: true
xs: 12
```

:::

### Progress in eukaryotic genome sequencing through time

:::grid{container direction="row" spacing="1" class="padded"}

```report
report: histogram
x: "assembly_date AND country_list={{countryCode}}"
rank: species
cat: assembly_level=contig,scaffold,chromosome,complete genome
includeEstimates: true
xOpts: "2004,2024,2,,Assembly date"
stacked: true
cumulative: true
result: taxon
taxonomy: ncbi
caption: "Cumulative number of assemblies for country_list={{countryCode}} **species** over time"
item: true
xs: 6
```

```report
report: histogram
x: "assembly_date AND country_list={{countryCode}}"
rank: Family
cat: assembly_level=contig,scaffold,chromosome,complete genome
includeEstimates: true
xOpts: "2004,2024,2,,Assembly date"
stacked: true
cumulative: true
caption: "Cumulative number of assemblies for country_list={{countryCode}} **families** over time"
result: taxon
taxonomy: ncbi
item: true
xs: 6
```

:::

### Contribution of the Earth BioGenome Project and other projects to sequencing taxa known to occur in :translated{type="country_list" text="{{countryCode}}"}

:::grid{container direction="row" spacing="1" class="padded"}

```report
report: arc
x: contig_n50>=1000000 AND scaffold_n50>=10000000 AND country_list={{countryCode}} AND bioproject=PRJNA533106
y: contig_n50>=1000000 AND scaffold_n50>=10000000 AND country_list={{countryCode}}
rank: species
includeEstimates: true
caption: "Contribution of EBP to total of country_list={{countryCode}} species with assemblies meeting EBP metrics"
result: taxon
taxonomy: ncbi
item: true
xs: 4
```

```report
report: histogram
x: insdc_open AND country_list={{countryCode}}
xField: insdc_open
rank: species
cat: assembly_level=contig,scaffold,chromosome,complete genome
xOpts: ",,10"
caption: "contribution of top 10 projects sequencing taxa with country_list={{countryCode}}"
stacked: true
pointSize: 15
ratio: 1.5
result: taxon
taxonomy: ncbi
item: true
xs: 8
```

:::

### Distribution of genome size and known range for species known to occur in :translated{type="country_list" text="{{countryCode}}"}

:::grid{container direction="row" spacing="1" class="padded"}

```report
report: scatter
x: genome_size AND tax_tree(2759[Eukaryota]) AND country_list={{countryCode}} AND length(country_list) < 11
y: length(country_list)
rank: species
cat: kingdom=Fungi,Metazoa,Viridiplantae
includeEstimates: true
xOpts: 10000000,100000000000,9
yOpts: 1,11,11,,Number of countries in species range
plotRatio: auto
scatterThreshold: 1000
pointSize: 15
result: taxon
taxonomy: ncbi
caption: "Range of genome sizes for species recorded in {{countryCode}} and fewer than 10 other countries"
item: true
xs: 12
ratio: 1.5
```

:::
