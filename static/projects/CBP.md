# Catalan Initiative for the Earth BioGenome  Project (CBP)
CBP aims to produce a detailed catalogue of the genome of eukaryotic species in the Catalan territories. For more information access CBP's official project page at https://www.biogenoma.cat/en/home/.


:::grid{container direction="row" spacing="1"}

::item[![GoaT](/static/images/CBP.jpg)]{xs=12}

# Summary Data:

:::grid{container direction=row}

Tap tree nodes to browse taxa or long-press to search:

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=CBP" y="assembly_span>0" treeStyle="rect" taxonomy="ncbi" includeEstimates="true" ratio=3 disableModal="true" item xs=12}

:::


:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND long_list=CBP" rank="phylum,class,order,family,genus,species" taxonomy="ncbi" ratio=2 item xs=7}

::report{report="xPerRank" x="long_list=CBP" item xs=5 }

:::
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span>0 AND long_list=CBP" y="long_list=CBP" rank="species" item xs=4}

::report{report="xInY" x="assembly_span>0 AND long_list=CBP" y="long_list=CBP" rank="family" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND long_list=CBP" y="long_list=CBP" rank="species" item xs=4}

:::


[back to projects](/projects)
