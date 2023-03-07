::grid[![GoaT](/static/images/AusARG-Logo.png)]{item xs=2}

# Australian Amphibian and Reptile Genome Initiative (AusARG)
**GoaT Search Term:** ARG


::grid[**AusARG**, the Australian amphibian and reptile genomics Initiative (AusARG) is a collaborative project that aims to to build genomic resources to understand and protect Australia’s reptiles and amphibians. For more information access AusARG's project page at https://ausargenomics.com]{item xs=12}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Declared targets of ARG highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ARG" y="in_progress=ARG" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of taxa in the declared target list of ARG.** Orange highlights represent clades with at least one descendant species in progress in the ARG pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## ARG Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=TBD" rank="phylum,class,order,family,genus,species" y="long_list=ARG" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ARG Targets:** Genome assemblies under Bioproject ID xxTBDxx, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ARG" includeEstimates=true caption="**Counts of taxa targeted by ARG**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of ARG Species 

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ARG" y="long_list=ARG" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ARG target species collected" item xs=4}

::report{report="xInY" x="in_progress=ARG" y="long_list=ARG" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ARG target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
