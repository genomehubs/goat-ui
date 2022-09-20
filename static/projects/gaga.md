::grid[![GoaT](/static/images/GAGA_banner.jpeg)]{item xs=2}

# Global Ant Genomics Alliance (GAGA)
**GoaT Search Term:** GAGA


::grid[**GAGA** will provide a comprehensive dataset of the genomic diversity of the world’s ant genera. For more information access GAGA's official project page at http://antgenomics.dk/.]{item xs=12}

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing GAGA target list highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=GAGA" y="in_progress=GAGA" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the GAGA long list.** Orange highlights represent clades with at least one descendant species in progress in the GAGA pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## GAGA Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=TBD" rank="family,genus,species" y="long_list=GAGA" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of GAGA Targets:** Genome assemblies under Bioproject ID xxTBDxx, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=GAGA" includeEstimates=true rank="family,genus,species" caption="**Counts of taxa targeted by GAGA**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of GAGA Species 

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=GAGA" y="long_list=GAGA" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of GAGA target species collected" item xs=6}

::report{report="xInY" x="in_progress=GAGA" y="long_list=GAGA" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of GAGA target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
