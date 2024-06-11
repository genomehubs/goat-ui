<!--
Content to display at /help/FAQs
-->

::breadcrumbs[FAQs]

## Project Planning

:::grid{container direction="row" toggle title="1. Chromosome number value doesn't agree with haploid number or ploidy fields" spacing="1"}

::grid[GoaT stores each field independently]{item xs=12 .paragraph}

::grid[As an example,  as shown in the [search results](https://goat.genomehubs.org/search?query=long_list%3Ddtol%20AND%20bioproject%3D%21prjeb40665%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=10&offset=0&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_dtol%2Clong_list&names=&ranks=&report=tree&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15).]{item xs=12 .paragraph}

::report{report="tree" x="bioproject=!PRJEB40665 AND long_list=dtol AND ebp_metric_date AND tax_rank(species)" y="ebp_metric_date" treeStyle="ring" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=2 includeEstimates="true" excludeAncestral="bioproject" excludeMissing="long_list" collapseMonotypic disableModal item caption="DToL targets already sequenced by other projects (not under BioProject ID PRJEB40665), with chromosome-level assemblies and meeting EBP contiguity metrics (contig_n50>1000000 AND scaffold_n50>10000000)." xs=12}

:::
