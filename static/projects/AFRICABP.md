
::grid[![GoaT](/static/images/africabp2.jpeg)]{item xs=4}


# African Biogenome Project (AfricaBP)
**GoaT Search Term:** AFRICABP


::grid[**AfricaBP** is a coordinated pan-African effort to build capacity (and infrastructure) to generate, analyze and deploy genomics data for the improvement and sustainable use of biodiversity and agriculture across Africa. For more information access https://africanbiogenome.org/.]{item xs=8}

**Bioproject ID** PRJNA811786

**Main Contact**: African BioGenome Project Chairs - info@africanbiogenome.org


::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the declared priority targets of AfricaBP highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=africabp" y="in_progress=AFRICABP" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=4 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the AfricaBP priority list.** Orange highlights represent clades with at least one descendant species in progress in the AfricaBP pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## AfricaBP Progress Reports
### Progress of Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA811786" rank="phylum,class,order,family,genus,species" y="long_list=AFRICABP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of AfricaBP Targets:** Genome assemblies under Bioproject ID PRJNA811786, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=AFRICABP" includeEstimates=true caption="**Counts of taxa declared as priority targets by AfricaBP**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::


:::grid{container direction="row" toggle title="Coming Soon - Sequencing Status of AfricaBP Species" spacing="1"}

::report{report="xInY" x="sample_collected=AFRICABP" y="long_list=AFRICABP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of AfricaBP target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=AFRICABP" y="long_list=AFRICABP" rank="species" includeEstimates=true excludeAncestral="sample_acquired" excludeMissing="sample_acquired" caption="Total of AfricaBP target species already received by assigned sequencing centers" item xs=4}

::report{report="xInY" x="in_progress=AFRICABP" y="long_list=AFRICABP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of AfricaBP target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
