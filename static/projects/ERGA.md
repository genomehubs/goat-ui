
::grid[![GoaT](/static/images/ERGA_logo_rect.jpg)]{item xs=2}

# European Reference Genome Atlas (ERGA)


::grid[**ERGA** is an effort to generate reference genomes representing European biodiversity. For more information access ERGA's official project page at https://www.erga-biodiversity.eu.]{item xs=8}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing ERGA long list

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=erga" y="assembly_span>0" treeStyle="rect" taxonomy="ncbi" levels="species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="Orange highlights represent clades with genomes already available. Species with available genomes are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## ERGA Wish List
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND long_list=erga" rank="phylum,class,order,family,genus,species" y="long_list=erga" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA Targets:** Genome assemblies available for ERGA wish list, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=erga" caption="**Counts of taxa targeted by ERGA**: All summary reports on GoaT are based on these counts" item xs=6}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span>0 AND long_list=ERGA" y="long_list=ERGA" rank="species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Total of ERGA target species with genome assemblies available on INSDC" item xs=4}

::report{report="xInY" x="contig_n50>=1000000 AND scaffold_n50>=10000000 AND long_list=ERGA" y="long_list=ERGA" rank="species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Total of ERGA target species with assemblies meeting EBP metrics" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND long_list=ERGA" y="long_list=ERGA" rank="species" ncludeEstimates excludeAncestral="assembly_level" excludeMissing="assembly_level" caption="Total of ERGA target species with chromosome-level assemblies" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
