::grid[![GoaT](/static/images/gap_logo.jpeg)]{item xs=4}

# Genomics for Australian Plants (GAP)
**GoaT Search Term:** GAP


::grid[**Genomics for Australian Plants** aim is to develop genomics resources to enhance our understanding of the evolution and conservation of the unique Australian flora. For more information access GAP's project page at https://www.genomicsforaustralianplants.com]{item xs=12}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing GAP target list highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=GAP" y="in_progress=GAP" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=4 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Taxa in the declared target list of GAP.** Orange highlights represent clades with at least one descendant species in progress in the GAP pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## GAP Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=TBD" rank="phylum,class,order,family,genus,species" y="long_list=GAP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of GAP Targets:** Genome assemblies under Bioproject ID xxTBDxx, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=GAP" includeEstimates=true caption="**Counts of taxa targeted by GAP**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of GAP Species 

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=GAP" y="long_list=GAP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of GAP target species collected" item xs=6}

::report{report="xInY" x="in_progress=GAP" y="long_list=GAP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of GAP target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
