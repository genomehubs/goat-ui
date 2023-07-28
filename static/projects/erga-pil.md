
::grid[![GoaT](/static/images/ERGA_logo_rect.jpg)]{item xs=2}

# European Reference Genome Atlas Pilot Project (ERGA-Pilot)
**GoaT Search Term:** ERGA-PIL


::grid[**ERGA** is an effort to generate reference genomes representing European biodiversity. To demonstrate the feasibility of continent-wide collaboration, ERGA has launched a Pilot Project; established, funded, and driven entirely by its members. For more information access ERGA-PIL official project page at https://www.erga-biodiversity.eu/pilot-project.]{item xs=8}

**Bioproject ID** PRJEB47820

**Main Contact**: pilot(at)erga-biodiversity.eu

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the declared target list of ERGA Pilot, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=erga-pil" y="assembly_span AND bioproject=PRJEB47820" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=1.8 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Taxa in the declared target list of the ERGA-Pilot project.** Orange highlights represent clades with at least one genome available under the ERGA Pilot Bioproject Id PRJEB47820. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## ERGA Pilot Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJEB47820" rank="phylum,class,order,family,genus,species" y="long_list=erga-pil" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA-Pilot Targets:** Genome assemblies under Bioproject ID PRJEB47820, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=erga-pil" includeEstimates=true caption="**Counts of taxa targeted by ERGA-Pilot**: All summary reports on GoaT are based on these counts" item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of ERGA Pilot Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ERGA-PIL" y="long_list=ERGA-PIL" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ERGA Pilot target species collected" item xs=6}

::report{report="xInY" x="in_progress=ERGA-PIL" y="long_list=ERGA-PIL" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ERGA Pilot target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Duplication Checker

### [Target Overlaps](https://goat.genomehubs.org/search?query=long_list%3Derga-pil%20AND%20length%28long_list%29%3E1%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=100&offset=0&fields=assembly_level%2Csequencing_status_erga-pil%2Csequencing_status%2Clong_list%2Cother_priority%2Cfamily_representative&names=&ranks=&report=tree&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list=erga-pil%20AND%20length(long_list)%3E1%20AND%20tax_rank(species))*: Overlaps between ERGA-PIL and EBP projects

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-pil_report0.md item xs=4}
::include{pageId=project_reports/erga-pil_list0.md xs=8}
:::

### [Already Sequenced](https://goat.genomehubs.org/search?query=long_list%3Derga-pil%20AND%20bioproject%3D%21PRJEB47820%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=10&offset=0&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_erga-pil%2Clong_list&names=&ranks=&report=tree&cat=sequencing_status_erga-pil&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list%3Derga-pil%20AND%20bioproject%3D!PRJEB47820%20AND%20tax_rank(species)%20AND%20ebp_metric_date)*: assemblies available meet erga-pil standards

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-pil_report1.md item xs=4}
::include{pageId=project_reports/erga-pil_list1.md xs=8}
:::

### [In progress by other EBP affiliate](https://goat.genomehubs.org/search?query=long_list%3Derga-pil%20AND%20length%28long_list%29%3E1%20AND%20sequencing_status%3E%3Dsample_collected%20AND%20sequencing_status_erga-pil%3Dnull%20AND%20bioproject%3D%21PRJEB47820%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Cbioproject%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_erga-pil%2Clong_list&names=&ranks=&report=arc&cat=sequencing_status_erga-pil&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=long_list%3Derga-pil&rank=species#long_list%3Derga-pil%20AND%20length(long_list)%3E1%20AND%20sequencing_status%3E%3Dsample_collected%20AND%20sequencing_status_erga-pil%3Dnull%20AND%20bioproject%3D!PRJEB47820%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)): not started by ERGA-PIL

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-pil_report2.md item xs=4}
::include{pageId=project_reports/erga-pil_list2.md xs=8}
:::

### [In progress by ERGA-PIL and others](https://goat.genomehubs.org/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_erga-pil%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C%21PRJEB47820%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_erga-pil&names=&ranks=&report=arc&cat=sequencing_status_erga-pil&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=sequencing_status_erga-pil%3E%3Dsample_acquired&rank=species#length(sample_collected)%3E1%20AND%20sequencing_status_erga-pil%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C!PRJEB47820%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)): need overlap solving

:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=project_reports/erga-pil_report3.md item xs=4}
::include{pageId=project_reports/erga-pil_list3.md xs=8}


:::
### Tree representing ERGA Pilot target list highlighting species currently in progress

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-PIL" y="in_progress=ERGA-PIL" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the ERGA Pilot long list.** Orange highlights represent clades with at least one descendant species in progress in the ERGA Pilot pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
