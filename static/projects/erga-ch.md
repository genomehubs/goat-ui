:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/ERGA-CH-logo.png)]{item xs=3}
:::

# ERGA-CH - The Swiss node of the European Reference Genome Atlas (ERGA) initiative

**GoaT Search Term:** ERGA-CH

::grid[**ERGA-CH** is the Swiss node of the European Reference Genome Atlas initiative. ERGA-CH is coordinating national sampling, sequencing, and assembly efforts to contribute to reference genome generation as part of the ERGA community. For more information reach the contact info below.]{item xs=8}

**Bioproject ID** PRJEB49197

**Main Contact**: switzerland(at)erga-biodiversity.eu

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## ERGA-CH Long List

ERGA-CH long_list correspond to the subset of Swiss species declared as targets by the project. To retrieve the list use the search terms:

- long_list=erga-ch
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Tree representing the declared target list of ERGA-CH, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-CH" y="assembly_span AND bioproject=PRJEB49197" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3.5 disableModal collapseMonotypic yOpts="10000000,7000000000,,linear" caption="**Taxa in the declared target list of the ERGA-CH project.** Orange highlights represent clades with at least one genome available under the ERGA-CH Bioproject Id PRJEB49197. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## ERGA-CH Progress Reports

### Progress of Eukaryotic Genome Sequencing by Taxon Rank

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJEB49197" rank="phylum,class,order,family,genus,species" y="long_list=erga-ch" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA-CH Targets:** Genome assemblies under Bioproject ID PRJEB49197, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ERGA-CH" includeEstimates=true caption="**Counts of taxa targeted by ERGA-CH**: All summary reports on GoaT are based on these counts" item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of ERGA-CH Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ERGA-CH" y="long_list=ERGA-CH" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ERGA-CH target species collected" item xs=6}

::report{report="xInY" x="in_progress=ERGA-CH" y="long_list=ERGA-CH" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ERGA-CH target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Duplication Checker

### [Target Overlaps](<https://goat.genomehubs.org/search?query=long_list%3Derga-ch%20AND%20length%28long_list%29%3E1%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=100&offset=0&fields=assembly_level%2Csequencing_status_erga-ch%2Csequencing_status%2Clong_list%2Cother_priority%2Cfamily_representative&names=&ranks=&report=tree&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list=erga-ch%20AND%20length(long_list)%3E1%20AND%20tax_rank(species)>)\*: Overlaps between ERGA-CH and EBP projects

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=project_reports/erga-ch_report0.md item xs=4 .unpadded}
::include{pageId=project_reports/erga-ch_list0.md xs=8 .unpadded}
:::

### [Already Sequenced](<https://goat.genomehubs.org/search?query=long_list%3Derga-ch%20AND%20bioproject%3D%21PRJEB49197%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=10&offset=0&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_erga-ch%2Clong_list&names=&ranks=&report=tree&cat=sequencing_status_erga-ch&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list%3Derga-ch%20AND%20bioproject%3D!PRJEB49197%20AND%20tax_rank(species)%20AND%20ebp_metric_date>)\*: assemblies available meet erga-ch standards

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=project_reports/erga-ch_report1.md item xs=4 .unpadded}
::include{pageId=project_reports/erga-ch_list1.md xs=8 .unpadded}
:::

### [In progress by other EBP affiliate](<https://goat.genomehubs.org/search?query=long_list%3Derga-ch%20AND%20length%28long_list%29%3E1%20AND%20sequencing_status%3E%3Dsample_collected%20AND%20sequencing_status_erga-ch%3Dnull%20AND%20bioproject%3D%21PRJEB49197%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Cbioproject%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_erga-ch%2Clong_list&names=&ranks=&report=arc&cat=sequencing_status_erga-ch&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=long_list%3Derga-ch&rank=species#long_list%3Derga-ch%20AND%20length(long_list)%3E1%20AND%20sequencing_status%3E%3Dsample_collected%20AND%20sequencing_status_erga-ch%3Dnull%20AND%20bioproject%3D!PRJEB49197%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)>): not started by ERGA-CH

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=project_reports/erga-ch_report2.md item xs=4 .unpadded}
::include{pageId=project_reports/erga-ch_list2.md xs=8 .unpadded}
:::

### [In progress by ERGA-CH and others](<https://goat.genomehubs.org/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_erga-ch%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C%21PRJEB49197%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=25&offset=0&fields=assembly_level%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_erga-ch&names=&ranks=&report=arc&cat=sequencing_status_erga-ch&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=sequencing_status_erga-ch%3E%3Dsample_acquired&rank=species#length(sample_collected)%3E1%20AND%20sequencing_status_erga-ch%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C!PRJEB49197%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C!chromosome%2C!complete%20genome%20AND%20tax_rank(species)>): need overlap solving

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=project_reports/erga-ch_report3.md item xs=4 .unpadded}
::include{pageId=project_reports/erga-ch_list3.md xs=8 .unpadded}

:::

### Tree representing ERGA-CH target list highlighting species currently in progress

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-CH" y="in_progress=ERGA-CH" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3.5 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the ERGA-CH long list.** Orange highlights represent clades with at least one descendant species in progress in the ERGA-CH pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
