
::grid[![GoaT](/static/images/ERGA_logo_rect.jpg)]{item xs=2}

# European Reference Genome Atlas (ERGA)


::grid[**ERGA** is an effort to generate reference genomes representing European biodiversity. For more information access ERGA's official project page at https://www.erga-biodiversity.eu.]{item xs=8}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing ERGA Pilot target list

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=erga" y="assembly_span>0" treeStyle="rect" taxonomy="ncbi" levels="species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="Orange highlights represent clades with at least one sequenced descendant. Species with assemblies already available in INSDC are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## The European Reference Genome Atlas Pilot Project
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJEB47820" rank="phylum,class,order,family,genus,species" y="long_list=erga" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA-Pilot Targets:** Genome assemblies under Bioproject ID PRJEB47820, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=erga" caption="**Counts of taxa targeted by ERGA-Pilot**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of ERGA-Pilot Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ERGA" y="long_list=ERGA" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ERGA Pilot target species collected" item xs=6}

::report{report="xInY" x="in_progress=ERGA" y="long_list=ERGA" rank="species" includeEstimates excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ERGA Pilot target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
