
::grid[![GoaT](/static/images/ERGA_logo_rect.jpg)]{item xs=2}

# European Reference Genome Atlas Pilot Project (ERGA-Pilot)
**GoaT Search Term:** ERGA


::grid[**ERGA** is an effort to generate reference genomes representing European biodiversity. For more information access ERGA's official project page at https://www.erga-biodiversity.eu.]{item xs=8}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the declared target list of ERGA Pilot, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=erga" y="assembly_span AND bioproject=PRJEB47820" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=1.8 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Taxa in the declared target list of the ERGA-Pilot project.** Orange highlights represent clades with at least one genome available under the ERGA Pilot Bioproject Id PRJEB47820. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## ERGA Pilot Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJEB47820" rank="phylum,class,order,family,genus,species" y="long_list=erga" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA-Pilot Targets:** Genome assemblies under Bioproject ID PRJEB47820, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=erga" includeEstimates=true caption="**Counts of taxa targeted by ERGA-Pilot**: All summary reports on GoaT are based on these counts" item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of ERGA Pilot Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ERGA" y="long_list=ERGA" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ERGA Pilot target species collected" item xs=6}

::report{report="xInY" x="in_progress=ERGA" y="long_list=ERGA" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ERGA Pilot target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

### Tree representing ERGA Pilot target list highlighting species currently in progress

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=erga" y="in_progress=ERGA" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the ERGA Pilot long list.** Orange highlights represent clades with at least one descendant species in progress in the ERGA Pilot pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
