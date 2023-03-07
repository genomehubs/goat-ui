:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/i5k.png)]{item xs=1}
::grid[![GoaT](/static/images/USDA.png)]{item xs=3}
:::


# Ag100Pest Initiative (Ag100Pest)

**GoaT Search Term:** AG100PEST

::grid[**Ag100Pest** aims to produce annotated, reference quality genome assemblies for the top 100 US arthropod agricultural pests. When possible, generate the PacBio long-read data from a single individual. For more information access the Ag100Pest's project page at http://i5k.github.io/ag100pest]{item xs=8}

**Bioproject ID** PRJNA555319
::grid[ ]{item xs=6}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Declared targets of Ag100Pest, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}


::report{report="tree" x="tax_tree(Eukaryota) AND long_list=AG100PEST" y="assembly_span AND bioproject=PRJNA555319" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=1.5 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Tree of taxa in the declared target list of Ag100Pest.** Orange highlights represent clades with at least one genome available under the Ag100Pest Bioproject Id PRJNA555319. Bar = assembly span." item xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Progress Reports for the Ag100Pest Project

### Progress of Genome Sequencing by Taxon Rank

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA555319" rank="phylum,class,order,family,genus,species" y="long_list=AG100PEST" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome sequencing of Ag100Pest targets:** Genome assemblies under Bioproject ID PRJNA555319, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=AG100PEST" includeEstimates=true caption="**Counts of taxa declared as targets by the Ag100Pest project**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status and Assembly Metrics of Ag100Pest Species

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="long_list=AG100PEST AND sequencing_status_ag100pest" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_ag100pest=sample_collected@collected,sample_acquired@acquired,in_progress@in_progress,insdc_open@insdc" excludeAncestral="long_list" excludeMissing="long_list" xOpts=";;1;;Sequencing Status" caption="Current sequencing status of Ag100Pest targets" item xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA555319" y="scaffold_n50" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity assessment of Ag100Pest assemblies. EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb" xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
