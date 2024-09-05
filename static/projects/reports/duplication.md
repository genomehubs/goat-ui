## Duplication Checker

### [Target Overlaps](/search?query=long_list%3D{{project}}%20AND%20length%28long_list%29%3E1%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Csequencing_status_{{lc_project}}%2Csequencing_status%2Clong_list%2Cother_priority%2Cfamily_representative&names=&report=tree&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15)\*: Overlaps between {{project}} and EBP projects

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report0.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list0.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}
:::

### [Already Sequenced](/search?query=long_list%3D{{project}}%20AND%20bioproject%3D%21{{bioproject}}%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&&taxonomy=ncbi&size=10&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_{{lc_project}}%2Clong_list&report=tree&cat=sequencing_status_{{lc_project}}&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15)\*: assemblies available meet {{project}} standards

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report1.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list1.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}
:::

### [In progress by other EBP affiliate](/search?query=long_list%3D{{project}}%20AND%20length%28long_list%29%3E1%20AND%20sequencing_status%3E%3Dsample_collected%20AND%20sequencing_status_{{lc_project}}%3Dnull%20AND%20bioproject%3D%21{{bioproject}}%2Cnull%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Cbioproject%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_{{lc_project}}%2Clong_list&report=arc&cat=sequencing_status_{{lc_project}}&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=long_list%3D{{project}}&rank=species): not started by {{project}}

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report2.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list2.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}
:::

### [In progress by {{project}} and others](/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_{{lc_project}}%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C%21{{bioproject}}%20AND%20ebp_metric_date%3Dnull%20AND%20assembly_level%3Dnull%2C%21chromosome%2C%21complete%20genome%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Csample_collected%2Csample_acquired%2Cin_progress%2Copen%2Cinsdc_open%2Csequencing_status%2Csequencing_status_{{lc_project}}&report=arc&cat=sequencing_status_{{lc_project}}&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15&y=sequencing_status_{{lc_project}}%3E%3Dsample_acquired&rank=species): need overlap solving

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report3.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list3.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}

:::
