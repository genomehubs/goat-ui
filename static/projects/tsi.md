::grid[![GoaT](/static/images/TSI_logo.png)]{item xs=2}

# Threatened Species Initiative (TSI)
**GoaT Search Term:** TSI


::grid[**TSI** aim is to build genomic resources to understand and protect Australia’s threatened species. For more information access TSI's project page at https://threatenedspeciesinitiative.com]{item xs=12}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing TSI target list highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=TSI" y="in_progress=TSI" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2.3 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the TSI long list.** Orange highlights represent clades with at least one descendant species in progress in the TSI pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## TSI Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=TBD" rank="phylum,class,order,family,genus,species" y="long_list=TSI" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of TSI Targets:** Genome assemblies under Bioproject ID xxTBDxx, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=TSI" includeEstimates=true caption="**Counts of taxa targeted by TSI**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of TSI Species 

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=TSI" y="long_list=TSI" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of TSI target species collected" item xs=6}

::report{report="xInY" x="in_progress=TSI" y="long_list=TSI" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of TSI target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)