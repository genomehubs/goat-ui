::grid[![GoaT](/static/images/CCGP.png)]{item xs=4}

# The California Conservation Genomics Project (CCGP)

**GoaT Search Term:** CCGP

::grid[**CCGP** is a state-funded initiative with a single goal: to produce the most comprehensive, multispecies, genomic dataset ever assembled to help manage regional biodiversity. The CCGP brings together many of California’s leading experts, working at the interface of genomics and conservation science, to provide decision makers with cutting-edge genomic resources and analyses. Our resources will inform conservation decisions in the face of rapidly accelerating species declines. For more information access the CCGP's project page at https://www.ccgproject.org/]{item xs=8}

**Bioproject ID** PRJNA720569
::grid[ ]{item xs=6}

**Main Contact:** [Courtney A. Miller](https://www.ccgproject.org/contact), CCGP Fund and Project Manager; 

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the declared target list of CCGP, highlighting species with available assemblies

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=CCGP" y="assembly_span AND bioproject=PRJNA720569" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Tree representing the declared target list of CCGP** Orange highlights represent clades with at least one genome already available. Species with available assemblies are highlighted in green. Bars correspond to estimates (grey) or direct (green) assembly span values for each species. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Progress Reports for the CCGP Project

### Progress of Genome Sequencing by Taxon Rank

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA720569" rank="phylum,class,order,family,genus,species" y="long_list=CCGP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome sequencing of CCGP targets:** Genome assemblies under Bioproject ID PRJNA720569, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=CCGP" includeEstimates=true caption="**Counts of taxa declared as targets by the CCGP project**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status and Assembly Metrics of CCGP Species

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="long_list=CCGP AND sequencing_status_ccgp" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_ccgp=sample_collected,sample_acquired,in_progress,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of CCGP targets" item xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA720569" y="scaffold_n50" cat="assembly_type=alternate-pseudohaplotype,haploid,haploid (principal pseudohaplotype of diploid)" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity assessment of CCGP assemblies. EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb" xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" toggle title="CCGP progress: cumulative number of species per status" spacing="1"}

::report{report="xInY" x="sample_collected=CCGP" y="long_list=CCGP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of CCGP target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=CCGP" y="long_list=CCGP" rank="species" includeEstimates=true excludeAncestral="sample_acquired" excludeMissing="sample_acquired" caption="Total of CCGP target species already received by assigned sequencing centers" item xs=4}

::report{report="xInY" x="in_progress=CCGP" y="long_list=CCGP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of CCGP target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
