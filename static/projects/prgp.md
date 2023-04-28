
::grid[![GoaT](/static/images/prgp.jpeg)]{item xs=3}
# Primate Genome Project (PGP)
**GoaT Search Term:** PRGP

::grid[**PRGP** This project will generate high quality reference genomes in combination of long reads and short reads sequencing for all extant primate species. For more information, access PRGP [announcement article](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8920853/).]{item xs=8}

**Bioproject ID** PRGP (placeholder aggregator)

**Main Contact**: Guojie Zhang: guojie.zhang (at) bio.ku.dk

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## PRGP Long List

The PRGP targets all >500 non-human primate species. PRGP long list on GoaT corresponds to all declared targets, represented by taxa sequenced under the Bioproject IDs PRJNA785018 and 
PRJNA911016（[NCBI)](https://www.ncbi.nlm.nih.gov/bioproject/?term=PRJNA785018) and PRJCA007326 [(Genome Warehouse)](https://ngdc.cncb.ac.cn/bioproject/browse/PRJCA007326). To retrieve the list use the search terms:
- long_list=PRGP 
- tax_rank(species)
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/capra3.png)]{item xs=1}
::grid[**Note:** Many PRGP genomes are stored in the [Genome Warehouse](https://ngdc.cncb.ac.cn/gwh/). This database is not yet on GoaT (work in progress), which may cause discrepancies on sequencing_status and summary reports.]{item xs=10}
:::
## Tree representing PRGP target list highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="long_list=PRGP AND tax_rank(species)" y="assembly_span AND bioproject=PRGP" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order" ratio=1.8 includeEstimates collapseMonotypic disableModal item yOpts="1000000,10000000000," caption="**Species in the declared target list of PRGP.** Orange highlights represent clades with at least one genome available under the BioProject ID aggregator (PRGP). Bars = assembly span." xs=12}
:::
Tap tree nodes to browse taxa or long-press to search.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of PRGP Target Taxa

Click on report to see and download individually.

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="bioproject=PRGP" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=PRGP" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" item xs=6 caption="**PRGP Contribution to Genome Assemblies Available in INSDC**  - Sequencing progress of PRGP target taxa under PRGP umbrella (Bioproject placeholder PRGP) at different taxonomic ranks."}

::report{report="xPerRank" x="long_list=PRGP" includeEstimates=true caption="**Counts of taxa targeted by PRGP**: All summary reports on GoaT are based on these counts" item xs=6}
:::

### Sequencing Status of PRGP Targets

* **sample_collected:** tissue is available for whole genome sequencing
* **sample_acquired:** samples received by the designated sequencing centers
* **in_progress:** includes sequencing, assembly and curation
* **open** data publicly available in a project-specific data store
* **insdc_open** assembly is publicly available on INSDC 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="long_list=PRGP AND sequencing_status_prgp" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_prgp=sample_collected,sample_acquired,in_progress,open,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts="PRGP,,1,,Sequencing Status" caption="Current sequencing status of PRGP targets" item xs=6}

::report{report="histogram" x="bioproject=PRGP" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" xOpts="PRGP,,1,, " caption="Assembly level for PRGP genomes" item xs=6}

### Contiguity assessment of PRGP assemblies. 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRGP" y="scaffold_n50 AND bioproject_accession=PRGP" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly type" pointSize=10 xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRGP" y="scaffold_n50 AND bioproject_accession=PRGP" cat="assembly_level=contig,scaffold,chromosome" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly level" pointSize=10 xs=6}

EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb


:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)

