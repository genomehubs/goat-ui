
::grid[![GoaT](/static/images/CanBP.png)]{item xs=4}

# Canada Biogenome Project (CBP)
**GoaT Search Term:** CanBP


::grid[**The Canada Biogenome Project** (CBP / CanBP) will embark on the task of determining the complete genetic diversity of Canada's plants and animals through genomic sequencing. For more information access http://earthbiogenome.ca/.]{item xs=8}

**Bioproject ID** PRJNA813333

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing CanBP target list, highlighting species with available assemblies

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=canbp AND tax_rank(species)" y="assembly_span AND bioproject=PRJNA813333" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Tree representing the target list of Canada Biogenome Project.** Orange highlights represent clades with at least one genome already available under the Bioproject ID PRJNA813333. Species with available assemblies are highlighted in green. Bars correspond to estimates (grey) or direct (green) assembly span values for each species. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## CanBP Progress Reports
### Progress of Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA813333" rank="phylum,class,order,family,genus,species" y="long_list=CANBP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of Canada Biogenome Project Targets:** Genome assemblies under Bioproject ID PRJNA813333, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=CANBP" includeEstimates=true caption="**Counts of taxa targeted by the Canada Biogenome Project**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Progress of Canada Biogenome Project

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="long_list=CANBP AND sequencing_status_canbp" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_canbp=sample_collected,sample_acquired,in_progress,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of CBP targets" item xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA813333" y="scaffold_n50" cat="assembly_type=alternate-pseudohaplotype,haploid,haploid (principal pseudohaplotype of diploid)" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity assessment of CBP assemblies. EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb" xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::


:::grid{container direction="row" toggle title="CanBP progress: cumulative number of species per status" spacing="1"}

::report{report="xInY" x="sample_collected=CANBP" y="long_list=CANBP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of CanBP target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=CANBP" y="long_list=CANBP" rank="species" includeEstimates=true excludeAncestral="sample_acquired" excludeMissing="sample_acquired" caption="Total of CanBP target species already received by assigned sequencing centers" item xs=4}

::report{report="xInY" x="in_progress=CANBP" y="long_list=CANBP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of CanBP target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)