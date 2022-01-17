
::grid[![GoaT](/static/images/ERGA_logo_rect.jpg)]{item xs=2}
# European Reference Genome Atlas (ERGA):
ERGA is an effort to generate reference genomes representing European biodiversity. For more information access ERGA's official project page at https://www.erga-biodiversity.eu.

:::grid{container direction="row" spacing="1"}



::report{report="xInY" x="assembly_span AND long_list=erga" rank="phylum,class,order,family,genus,species" caption="**ERGA Contribution to Eukaryotic Genome Sequencing:** Progress of Eukaryotic Genome Sequencing by Taxon Rank" item xs=6}

::report{report="xPerRank" x="long_list=erga" caption="**Counts of taxa targeted by ERGA**: All summary reports on GoaT are based using these counts" item xs=6}

:::

# Summary Data:

## Tree representing ERGA long list


:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=erga" y="assembly_span>0" treeStyle="rect" taxonomy="ncbi" includeEstimates="true" ratio=3 disableModal="true" caption="Orange highlights represent clades with genomes already available. Species with available genomes are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span>0 AND long_list=erga" y="long_list=erga" rank="species" item xs=4}

::report{report="xInY" x="assembly_span>0 AND long_list=erga" y="long_list=erga" rank="family" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND long_list=erga" y="long_list=erga" rank="species" item xs=4}


:::


[back to projects](/projects)
