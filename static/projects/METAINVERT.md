::grid[![GoaT](/static/images/Metainvert_banner.png)]{item xs=8}

# Metagenomic Monitoring of Soil Communities (MetaInvert - SIGI)
**GoaT Search Term:** METAINVERT


::grid[**MetaInvert** is part of the Central-European **Soil Invertebrate Genome Initiative (SIGI)** at Senckenberg and the LOEWE Centre for Translational Biodiversity Genomics (TBG). MetaInvert establishes a database of genomes for several hundred soil invertebrate species: springtails, oribatid mites, nematodes, potworms, myriapods, and several other groups. The project serves to improve species identification through shotgun metagenomics, to reveal evolutionary relationships, special adaptations, and host-microbiome associations. For more information access MetaInvert's official project page at https://tbg.senckenberg.de/tbg-project-miklos-balint-and-team/.]{item xs=12}

**Bioproject ID** PRJNA758215

::grid[ ]{item xs=4}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing MetaInvert target list highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=METAINVERT" y="in_progress=METAINVERT" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the MetaInvert long list.** Orange highlights represent clades with at least one descendant species in progress in the MetaInvert pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## MetaInvert Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA758215" rank="phylum,class,order,family,genus,species" y="long_list=METAINVERT" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of MetaInvert Targets:** Genome assemblies under Bioproject ID PRJNA758215, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=METAINVERT" includeEstimates=true caption="**Counts of taxa targeted by MetaInvert**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of MetaInvert Species 

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=METAINVERT" y="long_list=METAINVERT" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of MetaInvert target species collected" item xs=6}

::report{report="xInY" x="in_progress=METAINVERT" y="long_list=METAINVERT" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of MetaInvert target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
