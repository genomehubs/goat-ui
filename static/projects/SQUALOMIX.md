

::grid[![GoaT](/static/images/Squalomix-logo5.jpeg)]{item xs=10}

# SQUALOMIX - Genome Sequencing and Assembly of Chondrichthyans 


::grid[**SQUALOMIX** aims at unveiling the unique evolutionary trajectory of chondrichthyans (sharks, rays, and chimaeras) and is sustained by tight collaborations involving academic sequencing core facilities, marine stations, and public aquariums. By means of multimodal omics and molecular evolutionary approaches, it tackles biological questions in various fields including developmental biology and comparative physiology. For more information access SQUALOMIX's official project hub at https://github.com/Squalomix/info/]{item xs=8}

::grid[ ]{item xs=6}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing Squalomix target list highlighting species with available assemblies (green) and currently in progress (blue dots)

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=SQUALOMIX" y="assembly_span>0 AND bioproject=PRJNA707598" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3 disableModal collapseMonotypic yOpts="1000000,100000000000" cat="in_progress=squalomix" excludeAncestral="in_progress" caption="Tree representing Squalomix long list. Orange highlights represent clades with at least one genome already available. Dark blue dots represent clades with at least one descendant species in progress in the SQUALOMIX sequencing pipeline. Species with available assemblies are highlighted in green. Bars correspond to estimates (grey) or direct (green) assembly span values for each species. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## Squalomix Progress Reports
### Progress of Genome Sequencing by Taxon Rank: 
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA707598" rank="phylum,class,order,family,genus,species" y="long_list=SQUALOMIX" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of SQUALOMIX Targets:** Genome assemblies under Bioproject ID PRJNA707598, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=SQUALOMIX" includeEstimates=true caption="**Counts of taxa targeted by SQUALOMIX**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of Squalomix Target Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=SQUALOMIX" y="long_list=SQUALOMIX" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of SQUALOMIX target species collected" item xs=6}

::report{report="xInY" x="in_progress=SQUALOMIX" y="long_list=SQUALOMIX" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of SQUALOMIX  target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
