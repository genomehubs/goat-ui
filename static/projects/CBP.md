::grid[![GoaT](/static/images/CBP.jpg)]{item xs=4}

# Catalan Initiative for the Earth BioGenome Project (CBP)
**GoaT Search Term:** CBP
:::grid{container direction="row" class="padded"}

::grid[**The Catalan Initiative for the Earth BioGenome Project (CBP)** aims to produce a detailed catalogue of the genome of eukaryotic species in the Catalan territories. For more information access CBP's official project page at https://www.biogenoma.cat/en/home/.]{item xs=8}

::grid[ ]{item xs=4}
:::

# Summary Data

## Tree representing CBP target list highlighting species currently in progress

:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=CBP AND tax_rank(species)" y="in_progress=CBP" treeStyle="rect" taxonomy="ncbi" ratio=2 disableModal levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" collapseMonotypic caption="**Tree of species in the CBP long list.** Orange highlights represent clades with at least one descendant species in progress in the CBP pipeline. Taxa in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}

:::

## CBP Progress Reports
### Progress of CBP Genome Sequencing by Taxon Rank

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="bioproject=PRJEB49670" rank="phylum,class,order,family,genus,species" y="long_list=CBP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Progress of Eukaryotic Genome Sequencing in the CBP target list by Taxon Rank**" taxonomy="ncbi" item xs=6}

::report{report="xPerRank" x="long_list=CBP" includeEstimates=true caption="**Counts of taxa targeted by CBP**: All summary reports on GoaT are based on these counts" item xs=6 }
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of CBP Species

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="sample_collected=cbp" y="long_list=cbp" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of CBP target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=CBP" y="long_list=CBP" rank="species" includeEstimates=true excludeAncestral="sample_acquired" excludeMissing="sample_acquired" caption="Total of CBP target species already received by assigned sequencing centers" item xs=4}

::report{report="xInY" x="in_progress=CBP" y="long_list=CBP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of CBP target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
