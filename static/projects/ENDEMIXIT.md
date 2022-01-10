

# ENDEMIXIT
Using five endangered Italian endemic species, Endemixit plans to produce five de novo genomes and re-sequence 20 individuals. Further information can be found at https://endemixit.com.

:::grid{container direction="column"}

::item[![GoaT](/static/images/logo_ENDEMIXIT.png)]{xs=22}

# Summary Data:

:::grid{container direction=row}

Tap tree nodes to browse taxa or long-press to search:

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=endemixit" y="assembly_span>0" treeStyle="rect" taxonomy="ncbi" includeEstimates="true" ratio=3 disableModal="true" item xs=12}

:::


:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND long_list=endemixit" rank="phylum,class,order,family,genus,species" item xs=4}

::report{report="xPerRank" x="long_list=endemixit" item xs=4 }


::report{report="xInY" x="assembly_span>0 AND long_list=endemixit" y="long_list=endemixit" rank="species" item xs=4}

:::

[back to projects](/projects)