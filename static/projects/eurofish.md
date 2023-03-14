::grid[![GoaT](/static/images/euro-fish_logo.png)]{item xs=8}

# The Euro-Fish Project
**GoaT Search Term:** EUROFISH 

::grid[**Euro-Fish** aims to create a genomic survey of all species of freshwater fishes of Europe in order to understand and avert the loss of biodiversity. The MPI-CBG and the CSBD are contributing to the EURO-Fish initiative together with the University of Konstanz, Germany, the Leibniz Institute of Freshwater Ecology & Inland Fisheries Berlin, and the Zoological Research Museum Alexander Koenig, Berlin. The Max Planck Society is funding this ambitious genome sequencing project. For more information access the Euro-Fish's MPI-CBG project page at https://www.mpi-cbg.de/research/our-research/institutional-research-consortia/the-euro-fish-project]{item xs=8}

::grid[ ]{item xs=6}



:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the priority list of Euro-Fish, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND other_priority=EUROFISH" y="assembly_span>0 AND bioproject=PRJNA768423" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2.8 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Taxa in the declared target list of Euro-Fish.** Orange highlights represent clades with at least one genome available under the Euro-Fish Bioproject Id PRJNA768423. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## Progress Reports for the Euro-Fish Project
### Progress of Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA768423" rank="class,order,family,genus,species" y="long_list=EUROFISH" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome sequencing of Euro-Fish priority targets:** Genome assemblies under Bioproject ID PRJNA768423, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=EUROFISH" includeEstimates=true caption="**Counts of taxa prioritized by the Euro-Fish project**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status and Metrics of Euro-Fish Priority Species

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="long_list=EUROFISH" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_eurofish=sample_collected,sample_acquired,in_progress" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of Euro-Fish priority targets" item xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA768423" y="scaffold_n50 AND bioproject_accession=PRJNA768423" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity assessment of Euro-Fish assemblies. EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb" xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
