::grid[![GoaT](/static/images/tol_logo_words.png)]{item xs=2}

# Darwin Tree of Life (DToL)
**GoaT Search Term:** DTOL

::grid[The Darwin Tree of Life project aims to sequence the genomes of all eukaryotic species in Britain and Ireland. For more information, access DToL's project page at https://www.darwintreeoflife.org.]{item xs=8}

**Bioproject ID** PRJEB40665

**Main Contact**: Darwin Tree of Life Project Management - contact@darwintreeoflife.org

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## DToL Long List

The Darwin Tree of Life long list (all targets) includes all 75,000 eukaryotic species on the [United Kingdom Species Inventory](https://www.gbif.org/dataset/dbaa27eb-29e7-4cbb-8eab-3f689cfce116) published by the [Natural History Museum](https://www.nhm.ac.uk/our-science/data/uk-species.html).

## Tree representing DToL target list highlighting phyla with available assemblies (orange)

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="tax_tree(Eukaryota) AND long_list=DTOL AND tax_rank(Phylum)" y="assembly_span AND bioproject=PRJEB40665" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="10000,100000000000" caption="**Phyla in the declared target list of DToL.** Orange highlights represent clades with at least one genome available under the DToL BioProject ID PRJEB40665. Bars = assembly span estimates." xs=12}
:::
Tap tree nodes to browse taxa or long-press to search.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of DToL Target Taxa

Click on report to see and download individually.

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="bioproject=PRJEB40665" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=dtol" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" item xs=6 caption="**DToL Contribution to Genome Assemblies Available in INSDC**  - Sequencing progress of DToL target taxa under DToL umbrella (Bioproject ID PRJEB40665)  at different taxonomic ranks."}

::report{report="xPerRank" x="long_list=DTOL" includeEstimates=true caption="**Counts of taxa targeted by DToL**: All summary reports on GoaT are based on these counts" item xs=6}
:::

### Sequencing Status of DToL Targets

* **sample_collected:** status updated daily from [NHM](https://data.nhm.ac.uk/), [COPO](https://copo-project.org) and from the Wellcome Sanger Institute internal Sample Tracking System (STS). Includes monthly updates retrieved from other DToL partners and taxon working groups
* **sample_acquired:** species with samples on site at the Wellcome Sanger Institute
* **in_progress:** includes sequencing, assembly and curation

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="long_list=DTOL AND sequencing_status_dtol" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_dtol=sample_collected,sample_acquired,in_progress,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of DToL targets" item xs=6}

::report{report="histogram" x="bioproject=PRJEB40665" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" xOpts=",,1,, " caption="Assembly level for DToL genomes" item xs=6}

### Contiguity assessment of DToL assemblies. 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJEB40665" y="scaffold_n50 AND bioproject_accession=PRJEB40665" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly type" pointSize=10 xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJEB40665" y="scaffold_n50 AND bioproject_accession=PRJEB40665" cat="assembly_level=contig,scaffold,chromosome" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly level" pointSize=10 xs=6}

EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb


:::grid{container direction="row" spacing="1" class="padded"}
:::

## Duplication Checker

### [Already Sequenced](https://goat.genomehubs.org/search?query=long_list%20%3D%20dtol%20AND%20bioproject%20%21%3D%20prjeb40665%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=10&offset=0&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_dtol%2Clong_list&names=&ranks=&report=tree&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list%20%3D%20dtol%20AND%20bioproject%20!%3D%20prjeb40665%20AND%20tax_rank(species)%20AND%20ebp_metric_date): List of species already sequenced to DTOL standards. 
Dots on tree report indicate that the species (dots on tips) or taxon in that clade (dots on internal nodes) is in progress at DToL.
- **Criteria applied for search:**
  - target species of DToL and at least one other project
  - contig n50 > 1Mb
  - scaffold n50 > 10Mb
  - or has chromosome-level assembly


### [In progress by other EBP affiliate](https://goat.genomehubs.org/search?query=long_list%3Ddtol%20AND%20length%28long_list%29%3E1%20AND%20sample_collected%20AND%20sample_collected%21%3Ddtol%20AND%20bioproject%21%3Dprjeb40665%2Cnull%20AND%20ebp_metric_date%3D2060-02-02%2Cnull%20AND%20assembly_level%21%3Dchromosome%2Cnull%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=sample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_dtol%2Clong_list&names=&ranks=&report=arc&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=long_list%3Ddtol&rank=species#long_list%3Ddtol%20AND%20length(long_list)%3E1%20AND%20sample_collected%20AND%20sample_collected!%3Ddtol%20AND%20bioproject!%3Dprjeb40665%2Cnull%20AND%20ebp_metric_date%3D2060-02-02%2Cnull%20AND%20assembly_level!%3Dchromosome%2Cnull%20AND%20tax_rank(species)): Species acquired/in progress by others; not started by DToL
- **Criteria applied for search:**
  - target species of DToL and at least one other project
  - sample collected or in progress, but not by DToL
  - an assembly meeting DToL/EBP standards has not been published

### [In progress by DToL and others](https://goat.genomehubs.org/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_dtol%3E%3Dsample_collected%20AND%20bioproject%21%3Dprjeb40665%2Cnull%20AND%20ebp_metric_date%3D2060-02-02%2Cnull%20AND%20assembly_level%21%3Dchromosome%2Cnull%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=sequencing_status%2Csequencing_status_africabp%2Csequencing_status_ag100pest%2Csequencing_status_agi%2Csequencing_status_arg%2Csequencing_status_asg%2Csequencing_status_b10k%2Csequencing_status_canbp%2Csequencing_status_cbp%2Csequencing_status_ccgp%2Csequencing_status_cfgp%2Csequencing_status_dtol%2Csequencing_status_ebpn%2Csequencing_status_endemixit%2Csequencing_status_erga%2Csequencing_status_eurofish%2Csequencing_status_gaga%2Csequencing_status_gap%2Csequencing_status_gbr%2Csequencing_status_giga%2Csequencing_status_i5k%2Csequencing_status_ilebp%2Csequencing_status_1kfg%2Csequencing_status_loewe-tbg%2Csequencing_status_metainvert%2Csequencing_status_ogg%2Csequencing_status_omg%2Csequencing_status_other%2Csequencing_status_pgp%2Csequencing_status_prgp%2Csequencing_status_squalomix%2Csequencing_status_tsi%2Csequencing_status_vgp%2Csequencing_status_zoonomia%2Clong_list&names=&ranks=&report=arc&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=sequencing_status_dtol%3E%3Dsample_acquired&rank=species#length(sample_collected)%3E1%20AND%20sequencing_status_dtol%3E=sample_collected%20AND%20bioproject!=prjeb40665,null%20AND%20ebp_metric_date=2060-02-02,null%20AND%20assembly_level!=chromosome,null%20AND%20tax_rank(species)): Species acquired by dtol AND by at least one EBP affiliate - need overlap solving
For a table detailing sequecning status per project use [this link](https://goat.genomehubs.org/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_dtol%3E%3Dsample_collected%20AND%20bioproject%21%3Dprjeb40665%2Cnull%20AND%20ebp_metric_date%3D2060-02-02%2Cnull%20AND%20assembly_level%21%3Dchromosome%2Cnull%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=sequencing_status%2Csequencing_status_africabp%2Csequencing_status_ag100pest%2Csequencing_status_agi%2Csequencing_status_arg%2Csequencing_status_asg%2Csequencing_status_b10k%2Csequencing_status_canbp%2Csequencing_status_cbp%2Csequencing_status_ccgp%2Csequencing_status_cfgp%2Csequencing_status_dtol%2Csequencing_status_ebpn%2Csequencing_status_endemixit%2Csequencing_status_erga%2Csequencing_status_eurofish%2Csequencing_status_gaga%2Csequencing_status_gap%2Csequencing_status_gbr%2Csequencing_status_giga%2Csequencing_status_i5k%2Csequencing_status_ilebp%2Csequencing_status_1kfg%2Csequencing_status_loewe-tbg%2Csequencing_status_metainvert%2Csequencing_status_ogg%2Csequencing_status_omg%2Csequencing_status_other%2Csequencing_status_pgp%2Csequencing_status_prgp%2Csequencing_status_squalomix%2Csequencing_status_tsi%2Csequencing_status_vgp%2Csequencing_status_zoonomia%2Clong_list&names=&ranks=&report=arc&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=sequencing_status_dtol%3E%3Dsample_acquired&rank=species#length(sample_collected)%3E1%20AND%20sequencing_status_dtol%3E=sample_collected%20AND%20bioproject!=prjeb40665,null%20AND%20ebp_metric_date=2060-02-02,null%20AND%20assembly_level!=chromosome,null%20AND%20tax_rank(species)) 
- **Criteria applied for search:**
  - sample in progress by DToL AND at least one other project (in the EBP Network)
  - an assembly meeting DToL/EBP standards has not been published
  
:::grid{container direction="row" spacing="1" item xs=12}

::report{report="arc" x="long_list=dtol AND ebp_metric_date AND bioproject!=PRJEB40665" y="long_list=DTOL" rank="species" includeEstimates="true" result="taxon" taxonomy="ncbi" caption="**Already Sequenced** - Species from DToL target list already sequenced to DToL standards." item xs=4} 

::report{report="arc" x="long_list=dtol AND length(long_list)>1 AND sample_collected AND sample_collected!=dtol AND bioproject!=prjeb40665,null AND ebp_metric_date=2060-02-02,null AND assembly_level!=chromosome,null" y="long_list=DTOL" rank="species" includeEstimates="true" result="taxon" taxonomy="ncbi" caption="**In progress by other EBP affiliate** - Species from DToL target list in progress by others, not yet started by DToL." item xs=4}

::report{report="arc" x="length(sample_collected)>1 AND sequencing_status_dtol>=sample_collected AND bioproject!=prjeb40665,null AND ebp_metric_date=2060-02-02,null AND assembly_level!=chromosome,null" y="sequencing_status_dtol>=sample_acquired" rank="species" includeEstimates="true" result="taxon" taxonomy="ncbi" caption="**In progress by DToL and others** - Species in progress at DToL and at least 1 EBP affiliate out of species onboarded by DToL." item xs=4} 

:::

[back to projects](/projects)

