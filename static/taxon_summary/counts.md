::count{taxonomy=ncbi result=taxon query="tax_tree({{taxonId}}) AND tax_rank(species)" includeEstimates suffix=species description="{scientific_name} has {count} descendant species" }

::count{taxonomy=ncbi result=assembly query=tax_tree({{taxonId}}) suffix=assembly suffix_plural=assemblies description="There are {count} genome assemblies for {scientific_name} across all assembly levels"}

::count{taxonomy=ncbi result=taxon query="tax_tree({{taxonId}}) AND assembly_level>=chromosome AND tax_rank(species)" suffix=chromosomal description="{count} species of {scientific_name} have at least one chromosomal genome assembly"}

<!-- Example of counting the number of returned fields -->
<!--::count{taxonomy=ncbi result=taxon query="tax_name({{taxon_id}}) AND sequencing_status" suffix=project suffix_plural=projects of=fields fields="sequencing_status_*"} -->

::count{taxonomy=ncbi result=taxon query="tax_name({{taxonId}}) AND long_list" suffix=project suffix_plural=projects of=values fields="long_list" description="{scientific_name} is on the declared target list for {count} projects"}

<!-- Commented out as in_progress data are not accurate -->
<!-- ::count{taxonomy=ncbi result=taxon query="tax_name({{taxonId}}) AND in_progress" suffix="in progress" of=values fields="in_progress" description="{count} projects are currently working on a genome assembly for at least one species of {scientific_name}"} -->
