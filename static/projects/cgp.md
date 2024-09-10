:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/CGP.png)]{size=3}
:::

# Cetacean Genomes Project (CGP)

**GoaT Search Term:** CGP

::grid[**Cetacean Genomes Project** aim is to facilitate generation of reference genomes of all cetacean species. For more information reach the contact info below or access CGP [main project page](https://www.fisheries.noaa.gov/international/science-data/cetacean-genomes-project).]{size=8}

**Bioproject ID** PRJNA1020146

**Main Contact**: [Phil Morin](phillip.morin@noaa.gov), Southwest Fisheries Science Center (NOAA Federal), USA

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## CGP Long List

CGP long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list=CGP
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project=CGP bioproject=PRJNA1020146 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## CGP Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=CGP bioproject=PRJNA1020146 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=CGP .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=CGP bioproject=PRJNA1020146 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=CGP bioproject=PRJNA1020146 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# CGP Custom Reports

::include{pageId=/projects/reports/target_tree_simple_species.md project=CGP .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Contiguity assessment of Public Cetacean Genomes

:::grid{container direction="row" spacing="1"}

```report
report: "scatter"
result: "assembly"
x: "contig_n50 AND tax_tree(Cetacea)"
xField: "contig_n50"
y: "scaffold_n50 AND tax_tree(Cetacea)"
cat: "assembly_type=haploid@primary-haploid"
includeEstimates: false
xOpts: "10000,1000000000,11,log10"
yOpts: "10000,1000000000,11,log10"
highlightArea: "1000000,10000000,1000000000,1000000000,EBP metric zone"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity by assembly type"
size: 6
```

```report
report: "scatter"
result: "assembly"
x: "contig_n50 AND tax_tree(Cetacea)"
xField: "contig_n50"
y: "scaffold_n50 AND tax_tree(Cetacea)"
cat: "assembly_level=contig,scaffold,chromosome"
includeEstimates: false
xOpts: "10000,1000000000,11,log10"
yOpts: "10000,1000000000,11,log10"
highlightArea: "1000000,10000000,1000000000,1000000000,EBP metric zone"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity by assembly level"
size: 6
```

:::

## Completeness Assessment of Public Cetacean Genomes

:::grid{container direction="row" spacing="1"}

```report
report: "scatter"
result: "assembly"
x: "busco_completeness AND tax_tree(Cetacea)"
xField: "busco_completeness"
y: "gene_count AND tax_tree(Cetacea)"
cat: "assembly_type=haploid@primary-haploid"
includeEstimates: false
xOpts: "0,100,,"
yOpts: ",,,linear"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Completeness by assembly type"
size: 6
```

```report
report: "scatter"
result: "assembly"
x: "busco_completeness AND tax_tree(Cetacea)"
xField: "busco_completeness"
y: "gene_count AND tax_tree(Cetacea)"
cat: "assembly_level=contig,scaffold,chromosome"
includeEstimates: false
xOpts: "0,100,,"
yOpts: ",,,linear"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Completeness by assembly level"
size: 6
```

:::

## Metrics of Public Cetacean Genomes

:::grid{container direction="row" spacing="1"}

```report
report: histogram
x: qv_score and tax_tree(Cetacea) AND tax_rank(species)
cat: family[10]+
includeEstimates: false
xOpts: 20,80,10
stacked: true
pointSize: 20
result: assembly
taxonomy: ncbi
caption: "Distribution of QV scores by family"
size: 6
```

```report
report: histogram
x: assembly_span and assembly_type=!alternate-pseudohaplotype and tax_tree(Cetacea) AND tax_rank(species)
cat: family[12]+
includeEstimates: false
stacked: true
pointSize: 20
result: assembly
taxonomy: ncbi
caption: "Distribution of assembly_span by family"
size: 6
```

:::
::include{pageId=/projects/reports/contiguity_scatters.md project=CGP bioproject=PRJNA1020146 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
