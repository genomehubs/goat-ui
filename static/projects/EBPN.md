
::grid[![GoaT](/static/images/ebpn.jpeg)]{item xs=4}

# Earth Biogenome Project Norge (EBPN)


::grid[**EBPN** (EBP-Nor) will explore the diversity of species found in and around Norway through sequencing and genomic analyses. Comparisons across groups of related organisms will be made to better understand the ecology and evolution of Norwegian species. For more information access https://www.mn.uio.no/cees/english/research/groups/ebp-nor/.]{item xs=8}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing EBP-Nor target list highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ebpn" y="in_progress=EBPN" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the EBP-Nor long list.** Orange highlights represent clades with at least one descendant species in progress in the EBP-Nor pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## EBP-Nor Progress Reports
### Progress of Genome Sequencing by Taxon Rank: 
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=XXTBDXX" rank="phylum,class,order,family,genus,species" y="long_list=EBPN" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of EBP-Nor Targets:** Genome assemblies under Bioproject ID XXTBDXX, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ebpn" includeEstimates=true caption="**Counts of taxa targeted by EBP-Nor**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of EBP-Nor Species

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="sample_collected=EBPN" y="long_list=EBPN" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of EBP-Nor target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=EBPN" y="long_list=EBPN" rank="species" includeEstimates=true excludeAncestral="sample_acquired" excludeMissing="sample_acquired" caption="Total of EBP-Nor target species already received by assigned sequencing centers" item xs=4}

::report{report="xInY" x="in_progress=EBPN" y="long_list=EBPN" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of EBP-Nor target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
