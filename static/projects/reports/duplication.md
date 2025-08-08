## Duplication Checker
The following reports identify potential duplication in the {{project}} sequencing efforts.

> **Click on report title** to retrieve the corresponding species list and additional information.

### [Already Sequenced](/search?query=long_list%3D{{project}}%20AND%20ebp_standard_date%20AND%20bioproject%21%3D{{bioproject}}%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Csequencing_status_{{lc_project}}&report=arc&cat=sequencing_status_{{lc_project}}&y=long_list%3D{{project}}&rank=species&names=&ranks=&sortBy=sequencing_status_{{lc_project}}&sortOrder=desc&xOpts=%3B%3B1%3B%3B): assemblies meeting EBP standards exist


:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report1.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list1.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}


:::

### [Active duplication detected](/search?query=length%28sample_collected%29%3E1%20AND%20sequencing_status_{{lc_project}}%3E%3Dsample_collected%20AND%20bioproject%3Dnull%2C%21{{bioproject}}%20AND%20ebp_standard_date%3Dnull%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Csample_collected%2Csequencing_status_{{lc_project}}%2Csequencing_status_%2A&report=arc&cat=sequencing_status_{{lc_project}}&y=sequencing_status_{{lc_project}}%3E%3Dsample_collected&rank=species&names=&ranks=&sortBy=sequencing_status_{{lc_project}}&sortOrder=desc&xOpts=%3B%3B1%3B%3B): efforts initiated by {{project}} and at least one other project


:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report3.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list3.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}


:::

### [In progress by at least one other project](/search?query=long_list%3D{{project}}%20AND%20sequencing_status_{{lc_project}}%3Dnull%20AND%20length%28sample_collected%29%3E%3D1%20AND%20bioproject%3D%21{{bioproject}}%2Cnull%20AND%20ebp_standard_date%3Dnull%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Csample_collected%2Csequencing_status_{{lc_project}}%2Csequencing_status_%2A&report=arc&cat=sequencing_status_{{lc_project}}&y=long_list%3D{{project}}&rank=species): not started by {{project}}

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report2.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list2.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}

:::



### [Target List Overlaps](/search?query=long_list%3D{{project}}%20AND%20length%28long_list%29%3E1%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Csequencing_status_{{lc_project}}%2Clong_list%2Cother_priority%2Cfamily_representative&names=&report=table)\*: Overlaps in the scope of {{project}} and other projects in GoaT

:::grid{container direction="row" spacing="1" .padded}
::include{pageId=/projects/reports/duplication/report0.md project={{project}} bioproject={{bioproject}} size=4 .unpadded}
::include{pageId=/projects/reports/duplication/list0.md project={{project}} bioproject={{bioproject}} size=8 .unpadded}

:::