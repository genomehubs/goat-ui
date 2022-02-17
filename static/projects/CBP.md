::grid[![GoaT](/static/images/CBP.jpg)]{item xs=4}

# Catalan Initiative for the Earth BioGenome Project (CBP)
:::grid{container direction="row" class="padded"}

::grid[**The Catalan Initiative for the Earth BioGenome Project (CBP)** aims to produce a detailed catalogue of the genome of eukaryotic species in the Catalan territories. For more information access CBP's official project page at https://www.biogenoma.cat/en/home/.]{item xs=8}

::grid[ ]{item xs=4}
:::

# Summary Data

## Tree representing CBP long list

:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=CBP AND tax_rank(species)" y="assembly_span" treeStyle="rect" taxonomy="ncbi" ratio=2 includeEstimates collapseMonotypic caption="Orange highlights represent clades with genomes already available. Species with available genomes are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## CBP Wish List

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="assembly_span AND long_list=CBP" rank="phylum,class,order,family,genus,species" y="long_list=CBP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Progress of Eukaryotic Genome Sequencing in the CBP target list by Taxon Rank**" taxonomy="ncbi" item xs=6}

::report{report="xPerRank" x="long_list=CBP" caption="**Counts of taxa targeted by CBP**: All summary reports on GoaT are based on these counts" item xs=6 }
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span>0 AND long_list=CBP" y="long_list=CBP" rank="species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Total of CBP target species with genome assemblies available on INSDC" item xs=6}

::report{report="xInY" x="assembly_level=chromosome AND long_list=CBP" y="long_list=CBP" rank="species" includeEstimates excludeAncestral="assembly_level" excludeMissing="assembly_level" caption="Total of CBP target species with chromosome-level assemblies" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
