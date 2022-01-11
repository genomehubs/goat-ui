# European Reference Genome Atlas (ERGA):
ERGA is an effort to generate reference genomes representing European biodiversity. For more information access ERGA's official project page at https://www.erga-biodiversity.eu.

:::grid{container direction="row" spacing="1"}

::item[![GoaT](/static/images/ERGA_logo_square.jpg)]{xs=3}

::report{report="xInY" x="assembly_span AND long_list=erga" rank="phylum,class,order,family,genus,species" item xs=6}

::report{report="xPerRank" x="long_list=erga" item xs=3}

:::

# Summary Data:

:::grid{container direction=row}

Tap tree nodes to browse taxa or long-press to search:

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=erga" y="assembly_span>0" treeStyle="rect" taxonomy="ncbi" includeEstimates="true" ratio=3 disableModal="true" item xs=12}


:::
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span>0 AND long_list=erga" y="long_list=erga" rank="species" item xs=4}

::report{report="xInY" x="assembly_span>0 AND long_list=erga" y="long_list=erga" rank="family" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND long_list=erga" y="long_list=erga" rank="species" item xs=4}


:::


[back to projects](/projects)
