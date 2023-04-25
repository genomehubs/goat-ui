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
* **insdc_open** assembly is publicly available on INSDC

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
### [Already Sequenced](https://goat.genomehubs.org/search?query=long_list%3Ddtol%20AND%20bioproject%3D%21prjeb40665%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=10&offset=0&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_dtol%2Clong_list&names=&ranks=&report=tree&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list%3Ddtol%20AND%20bioproject%3D!prjeb40665%20AND%20tax_rank(species)%20AND%20ebp_metric_date)*: assemblies available meet DToL standards

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/dtol_report1.md item xs=4}
::include{pageId=project_reports/dtol_list1.md xs=8}
:::

### [In progress by other EBP affiliate](https://goat.genomehubs.org/search?query=long_list%3Ddtol%20AND%20length%28long_list%29%3E1%20AND%20sample_collected%20AND%20sample_collected%3D%21dtol%20AND%20bioproject%3D%21prjeb40665%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Cbioproject%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_dtol%2Clong_list&names=&ranks=&report=arc&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=long_list%3Ddtol&rank=species#long_list%3Ddtol%20AND%20length(long_list)%3E1%20AND%20sample_collected%20AND%20sample_collected%3D!dtol%20AND%20bioproject%3D!prjeb40665%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)): not started by DToL

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/dtol_report2.md item xs=4}
::include{pageId=project_reports/dtol_list2.md xs=8}
:::

### [In progress by DToL and others](https://goat.genomehubs.org/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_dtol%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C%21prjeb40665%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_dtol&names=&ranks=&report=arc&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=sequencing_status_dtol%3E%3Dsample_acquired&rank=species#length(sample_collected)%3E1%20AND%20sequencing_status_dtol%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C!prjeb40665%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)): need overlap solving

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/dtol_report3.md item xs=4}
::include{pageId=project_reports/dtol_list3.md xs=8}


:::

[back to projects](/projects)

