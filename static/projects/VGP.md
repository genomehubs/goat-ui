::grid[![GoaT](/static/images/VGP_logo.png)]{item xs=4}

# The Vertebrate Genomes Project (VGP)
**GoaT Search Term:** VGP


::grid[**VGP** aims to producing high-quality, accurate, annotated reference genomes for all 71,657 living and named vertebrate species. Phase I of the project will generate over 260 near-gapless, chromosome-level and phased genome assemblies representing all extant vertebrate orders. For more information access the VGP's project page at https://vertebrategenomesproject.org]{item xs=8}

**Bioproject ID** PRJNA489243
::grid[ ]{item xs=6}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the declared target list of VGP (including, but not limited to Phase I priority targets), highlighting species with available assemblies

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=VGP" y="assembly_span AND bioproject=PRJNA489243" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2.8  disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Tree representing declared target list of VGP, including outgroups.** Orange highlights represent clades with at least one genome already available. Species with available assemblies are highlighted in green. Bars correspond to estimates (grey) or direct (green) assembly span values for each species. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## Progress Reports for the Phase I of the VGP Project
### Progress of Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA489243" rank="class,order,family,genus,species" y="other_priority=VGP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome sequencing of VGP priority targets (Phase I):** Genome assemblies under Bioproject ID PRJNA489243, at different taxonomic ranks" item xs=4}

::report{report="xPerRank" x="long_list=VGP" includeEstimates=true caption="**Counts of taxa declared as targets by the VGP project**: All summary reports on GoaT are based on these counts" item xs=4}

::report{report="xPerRank" x="other_priority=VGP" includeEstimates=true caption="**Counts of taxa prioritized by the VGP project (Phase I)**: All summary reports on GoaT are based on these counts" item xs=4}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status and Assembly Metrics of VGP Priority Species

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="other_priority=VGP AND sequencing_status_vgp" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status=sample_collected,sample_acquired,in_progress,insdc_submitted,insdc_open" excludeAncestral="other_priority" excludeMissing="other_priority" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of VGP Phase I targets" item xs=6}

::report{report="scatter" x="contig_n50 AND bioproject=PRJNA489243" y="scaffold_n50 AND bioproject=PRJNA489243" rank="species" cat="assembly_level" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" zScale="sqrt" xOpts="100,1000000000,8" yOpts="1000,1000000000,7" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity assessment of VGP assemblies. EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb" xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
