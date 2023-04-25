
:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/biodiversity_genomics.png)]{item xs=3}
::grid[![GoaT](/static/images/ERGA_logo_rect.jpg)]{item xs=2}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# ERGA - Biodiversity Genomics Europe Project (ERGA-BGE)
**GoaT Search Term:** ERGA-BGE


::grid[**ERGA-BGE** will deliver genomes fostered by the Biodiversity Genomics Europe (BGE). The overriding aim of BGE is to accelerate the use of genomic science to enhance understanding of biodiversity, monitor biodiversity change, and guide interventions to address its decline. BGE brings together two  European-wide networks: [BIOSCAN Europe](https://www.bioscaneurope.org/), which focuses on DNA barcoding, and the European Reference Genome Atlas [ERGA](https://www.erga-biodiversity.eu/), which focuses on genome sequencing. For more information access BGE official page at https://biodiversitygenomics.eu/the-project.]{item xs=8}

**Bioproject ID** TBD

**Main Contact**: info@biodiversitygenomics.eu

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## ERGA-BGE Long List

:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/capra3.png)]{item xs=23} 
::grid[ERGA-BGE target list compilation is currently **in progress.** All data in GoaT currently corresponds to the declared targets of the Biodiversity Hotspots.]{item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Tree representing the declared target list of ERGA-BGE, highlighting species with available assemblies (green)



:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-BGE" y="assembly_span AND bioproject=**TBD**" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 disableModal collapseMonotypic yOpts="10000000,6000000000,,linear" caption="**Taxa in the declared target list of the ERGA-BGE project.** Orange highlights represent clades with at least one genome available under the ERGA-BGE Bioproject Id **TBD**. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## ERGA-BGE Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=**TBD**" rank="phylum,class,order,family,genus,species" y="long_list=erga" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA-BGE Targets:** Genome assemblies under Bioproject ID **TBD**, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ERGA-BGE" includeEstimates=true caption="**Counts of taxa targeted by ERGA-BGE**: All summary reports on GoaT are based on these counts" item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of ERGA-BGE Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ERGA-BGE" y="long_list=ERGA-BGE" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ERGA-BGE target species collected" item xs=6}

::report{report="xInY" x="in_progress=ERGA-BGE" y="long_list=ERGA-BGE" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ERGA-BGE target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

### Tree representing ERGA-BGE target list highlighting species currently in progress

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-BGE" y="in_progress=ERGA-BGE" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the ERGA-BGE long list.** Orange highlights represent clades with at least one descendant species in progress in the ERGA-BGE pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
