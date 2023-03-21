# Cartilaginous Fish Genome Project (CFGP)
**GoaT Search Term:** CFGP


::grid[**CFGP** This project aims to sequence genomes of more than 30 cartilaginous fishes, covering all the orders. With these new resources, scientists can investigate the evolutionary landscape of early jawed vertebrates as well as specific features of cartilaginous fishes.]{item xs=12}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing CFGP target list highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=CFGP" y="in_progress=CFGP" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Taxa in the declared target list of CFGP.** Orange highlights represent clades with at least one descendant species in progress in the CFGP pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## CFGP Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=TBD" rank="phylum,class,order,family,genus,species" y="long_list=CFGP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of CFGP Targets:** Genome assemblies under Bioproject ID xxTBDxx, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=CFGP" includeEstimates=true caption="**Counts of taxa targeted by CFGP**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of CFGP Species 

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=CFGP" y="long_list=CFGP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of CFGP target species collected" item xs=6}

::report{report="xInY" x="in_progress=CFGP" y="long_list=CFGP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of CFGP target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
