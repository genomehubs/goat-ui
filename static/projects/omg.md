::grid[![GoaT](/static/images/omg-logo.jpeg)]{item xs=2}

# Oz Mammals Genomics (OMG)
**GoaT Search Term:** OMG


::grid[**Oz Mammals Genomics** aim is to build genomic resources to understand and protect Australia’s mammals. For more information access OMG's project page at https://ozmammalsgenomics.com/]{item xs=12}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing OMG target list highlighting species currently in progress (green)

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=OMG" y="in_progress=OMG" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3.4 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Taxa in the declared target list of OMG.** Orange highlights represent clades with at least one descendant species in progress in the OMG pipeline. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## OMG Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=TBD" rank="phylum,class,order,family,genus,species" y="long_list=OMG" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of OMG Targets:** Genome assemblies under Bioproject ID xxTBDxx, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=OMG" includeEstimates=true caption="**Counts of taxa targeted by OMG**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of OMG Species 

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=OMG" y="long_list=OMG" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of OMG target species collected" item xs=6}

::report{report="xInY" x="in_progress=OMG" y="long_list=OMG" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of OMG target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
