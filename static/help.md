# Help

## How to use GoaT

The easiest way to start exploring goat is to select your favorite taxon and play with the icons displayed under GoaTs search box.

You can use the "result columns" icon below the search box to select the metadata you would like to display for your search.

The drop down terms in the "query builder" icon can be also used to refine your search terms in your query.
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Example Steps

- [1] In the search box above try typing and selecting: Chiroptera

- [2] Click on the "result columns" icon

- [3] Deselect all boxes except "assembly"

- [4] In the "assembly"dropdown, select only assembly_span

- [5] Click the "Update" icon

- [6] Turn the "include descendants" switch on
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Illustrated GoaT Search Tutorial

[Illustrated User Guide](https://docs.google.com/document/d/10ayIwVQ7kwEvStsBiG8dzE9xJDt53u8e0TF806CC344/edit?usp=sharing)

:::grid{container direction="row" spacing="1" class="padded"}
:::
## Color-coding System

The values in this GenomeHub are shown alongside a color-coding, bar-filling system as follows:

- :aggregation[]{method="direct"} direct (full)
- :aggregation[]{method="descendant"} descendant (near full)
- :aggregation[]{method="ancestor"} ancestral (quarter full)


The color- and filling- bar system indicates which results are based on :span[direct]{.direct} measurements (full bars), which are inferred from :span[descendant]{.descendant} taxa (indicated by bars with an intermediate fill level), and which are inferred from sibling taxa via a shared :span[ancestor]{.ancestor} (indicated by mostly empty bars). For this last category, tooltips provide details of the common ancestral rank to provide an indication of how reliable the estimate may be, e.g. :tooltip[:span[ancestor]{.ancestor}]{title="family" arrow placement="right"}.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## GoaT Reports
GoaT reports from search results can be edited following three main steps:
- [1] click on the report 
- [2] use the edit (pencil) icon to change attributes and values
- [3] click on the update icon to implement the changes

- Practice using this [example report from landing page](https://goat.genomehubs.org/report?report=xInY&x=assembly_level%3Dchromosome&y=assembly_span&rank=species&includeEstimates=true&excludeAncestral%5B0%5D=assembly_span&excludeMissing%5B0%5D=assembly_span&caption=Contribution%20of%20chromosome-level%20assemblies%20to%20the%20total%20of%20species%20with%20available%20assemblies%20on%20INSDC&taxonomy=ncbi&result=taxon) or choose a report to practice [here](https://goat.genomehubs.org).

:::grid{container direction="row" spacing="1" class="padded"}
:::
## List of Atributes for Taxon Index on GoaT
Attributes can be used as search terms alongside taxa in the search box

Ex: assembly_span AND tax_name(chiroptera)

Select **result columns** to display (**mandatory step!**)

:::grid{container direction="row" toggle title="List of Taxon Attributes on GoaT" spacing="1" class="padded" item xs=10}




::grid[**assembly**]{item xs=12 .paragraph}

- assembly_level
- assembly_span
- bioproject
- biosample
- contig_n50
- assembly_date
- scaffold_n50
- gene_count
- sample_sex
- ebp_metric_date
- busco_completeness
- busco_lineage
- gc_percent
- n_percent
- nohit
- target

::grid[**mitochondrion_assembly**]{item xs=12 .paragraph}
- mitochondrion_assembly_span
- mitochondrion_gc_percent

::grid[**plastid_assembly**]{item xs=12 .paragraph}
- plastid_assembly_span
- plastid_gc_percent

::grid[**karyotype**]{item xs=12 .paragraph}

- chromosome_number
- haploid_number
- sex_determination
- ploidy

::grid[**genome_size**]{item xs=12 .paragraph}
- genome_size
- genome_size_kmer
- genome_size_draft
- c_value
- c_value_method
- c_value_cell_type

::grid[**uk_legislation**]{item xs=12 .paragraph}
- marhabreg-2017
- habreg_2017
- echabs92
- isb_wildlife_act_1976
- waca_1981
- protection_of_badgers_act_1992

::grid[**sequencing_status**]{item xs=12 .paragraph}
- sequencing_status
- sample_collected
- sample_acquired
- in_progress
- insdc_submitted
- insdc_open
- published
- sample_collected_by
- sequencing_status_b10k
- sequencing_status_cbp
- sequencing_status_cfgp
- sequencing_status_dtol
- sequencing_status_ebpn
- sequencing_status_endemixit
- sequencing_status_erga
- sequencing_status_eurofish
- sequencing_status_gaga
- sequencing_status_metainvert
- sequencing_status_squalomix
- sequencing_status_vgp

::grid[**regional_lists**]{item xs=12 .paragraph}
- country_list

::grid[**target_lists**]{item xs=12 .paragraph}
- other_priority
- family_representative
- long_list


::grid[**ranks**]{item xs=12 .paragraph}
- subspecies
- species
- genus
- family
- order
- class
- phylum
- kingdom
- superkingdom

::grid[**names**]{item xs=12 .paragraph}
- tol_id
- common_name
- synonym

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Use Cases for EBP Projects
Sequencing genomes at the scale of the EBP requires careful coordination between affiliated projects to prevent duplication of effort and to ensure resources are used efficiently. Metadata stored in GoaT can be used throughout a sequencing project to help meet these requirements. Here we describe a set of use cases from planning to completion that can be applied to any sequencing initiative in the EBP Network and more broadly to any genome sequencing project. We primarily use the Darwin Tree of Life (DToL) as an example project, but the equivalent information can be retrieved for any EBP-affiliated project on GoaT using the relevant acronym, listed on [projects](/projects) tab, in place of "DTOL" in the examples below. For a expanded version of use cases, check our [GoaT paper](https://wellcomeopenresearch.org/articles/8-24).

### Project Planning

:::grid{container direction="row" toggle title="Case 1. Which species on a target list have already been sequenced to the desired standards?" spacing="1"}

::grid[GoaT stores three categories of target lists to help distinguish taxa that are likely to be sequenced in the long- versus short-term: **long_list** includes all targets of a project, whereas **family_representative** and **other_priority** are subsets of species in the long_list that will be prioritised. Refining a target list includes removing any species for which an assembly meeting the project's criteria is already available and coordinating cases of overlap with different sequencing initiatives. ]{item xs=12 .paragraph}

::grid[As an example, the DTOL project aims to sequence all described eukaryotic species in Britain and Ireland. This target list is represented in GoaT using the attribute-value pair **“long_list = DTOL”** and is currently estimated at ~70,000 species. High quality chromosome level genome assemblies already exist for several hundred of these species as shown in the [search results](https://goat.genomehubs.org/search?query=long_list%3Ddtol%20AND%20bioproject%3D%21prjeb40665%20AND%20tax_rank%28species%29%20AND%20ebp_metric_date&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=10&offset=0&fields=assembly_level%2Cassembly_span%2Cbioproject%2Csequencing_status%2Csequencing_status_dtol%2Clong_list&names=&ranks=&report=tree&cat=sequencing_status_dtol&collapseMonotypic=true&treeStyle=rect&treeThreshold=2000&pointSize=15#long_list%3Ddtol%20AND%20bioproject%3D!prjeb40665%20AND%20tax_rank(species)%20AND%20ebp_metric_date), which can be removed from the DToL 'to do' list.]{item xs=12 .paragraph}

 

::report{report="tree" x="bioproject=!PRJEB40665 AND long_list=dtol AND ebp_metric_date AND tax_rank(species)" y="ebp_metric_date" treeStyle="ring" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=2 includeEstimates="true" excludeAncestral="bioproject" excludeMissing="long_list" collapseMonotypic disableModal item caption="DToL targets already sequenced by other projects (not under BioProject ID PRJEB40665), with chromosome-level assemblies and meeting EBP contiguity metrics (contig_n50>1000000 AND scaffold_n50>10000000)." xs=12}
:::


:::grid{container direction="row" toggle title="Case 2. What species in the DToL long list are also targeted by other projects? Are any shared targets also declared as a priority by another project?" spacing="1"}

::grid[As GoaT stores information about sequencing intent for multiple sequencing initiatives, decisions on prioritisation can also take into account the [overlap between different projects](https://goat.genomehubs.org/search?query=tax_rank%28species%29%20AND%20length%28long_list%29%3E1&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&offset=0&fields=sequencing_status%2Clong_list%2Cother_priority%2Cfamily_representative&names=&ranks=&size=10#tax_rank(species)%20AND%20length(long_list)%3E1). It is possible to query the length of the list of values in the long_list to identify taxa that overlap between projects using **“length(long_list) > 1”** to return any taxon for which there is more than one project represented in the long_list attribute. The search can be refined to generate a report of how many DToL target species are [shared with other projects](https://goat.genomehubs.org/search?report=arc&query=long_list%3Ddtol%20AND%20length%28long_list%29%3E1%20AND%20tax_rank%28species%29&y=long_list%3Ddtol&rank=species&includeEstimates=true&excludeAncestral%5B0%5D=long_list&excludeMissing%5B0%5D=long_list&caption=Total%20of%20DToL%20target%20species%20also%20targeted%20by%20other%20projects%20in%20the%20EBP%20affiliated%20network&taxonomy=ncbi&result=taxon&summaryValues=count&offset=0&fields=c_value%2Cgenome_size%2Cgenome_size_kmer%2Cgenome_size_draft%2Cassembly_level%2Cassembly_span%2Cbusco_completeness%2Cgc_percent%2Cchromosome_number%2Chaploid_number%2Clong_list&names=&ranks=#long_list=dtol%20AND%20length(long_list)%3E1%20AND%20tax_rank(species)), how many are [on a priority list for another project](https://goat.genomehubs.org/search?report=arc&query=long_list%3Ddtol%20AND%20other_priority%21%3Ddtol%20AND%20tax_rank%28species%29&y=long_list%3Ddtol&rank=species&includeEstimates=true&excludeAncestral%5B0%5D=long_list&excludeMissing%5B0%5D=long_list&caption=Total%20of%20DToL%20target%20species%20also%20targeted%20by%20other%20projects%20in%20the%20EBP%20affiliated%20network&taxonomy=ncbi&result=taxon&summaryValues=count&offset=0&fields=c_value%2Cgenome_size%2Cassembly_level%2Cassembly_span%2Cchromosome_number%2Chaploid_number%2Clong_list%2Cother_priority&names=&ranks=#long_list=dtol%20AND%20other_priority!=dtol%20AND%20tax_rank(species)) and how many are listed as [family_representatives for other projects](https://goat.genomehubs.org/search?report=arc&query=long_list%3Ddtol%20AND%20family_representative%21%3Ddtol%20AND%20tax_rank%28species%29&y=long_list%3Ddtol&rank=species&includeEstimates=true&excludeAncestral%5B0%5D=long_list&excludeMissing%5B0%5D=long_list&caption=Total%20of%20DToL%20target%20species%20also%20targeted%20by%20other%20projects%20in%20the%20EBP%20affiliated%20network&taxonomy=ncbi&result=taxon&summaryValues=count&offset=0&fields=c_value%2Cgenome_size%2Cassembly_level%2Cassembly_span%2Cchromosome_number%2Chaploid_number%2Clong_list%2Cfamily_representative&names=&ranks=#long_list=dtol%20AND%20family_representative!=dtol%20AND%20tax_rank(species)) ]{item xs=12 .paragraph}



::report{report="xInY" x="long_list=dtol AND length(long_list)>1" y="long_list=dtol" rank="species" includeEstimates excludeAncestral="long_list" excludeMissing="long_list" caption="Total number of DToL target species included on any other target list" item xs=4}

::report{report="xInY" x="other_priority!=dtol" y="long_list=dtol" rank="species" includeEstimates excludeAncestral="long_list" excludeMissing="long_list" caption=" Number of DToL target species included on a priority list of another project" item xs=4}

::report{report="xInY" x="family_representative!=dtol" y="long_list=dtol" rank="species" includeEstimates excludeAncestral="long_list" excludeMissing="long_list" caption="Number DToL target species listed as a family representative by another project, but not by DToL " item xs=4}

:::

:::grid{container direction="row" toggle title="Case 3. Sequencing status and coordination between sampling working groups and sequencing centres" spacing="1"}

::grid[Following initial prioritisation, the focus of planning changes and requires monitoring of progress within a project and the wider suite of EBP-affiliate projects. GoaT sequencing status attributes allow users to track which projects have reached collection and sequencing milestones for each taxon.]{item xs=12 .paragraph}

::grid[In this [example of sequencing status query](https://goat.genomehubs.org/search?query=long_list%3Ddtol%20AND%20sequencing_status%20AND%20tax_rank%28species%29&result=taxon&fields=sample_acquired%2Cin_progress%2Csample_collected%2Csample_collected_by%2Csequencing_status%2Csequencing_status_dtol%2Clong_list%2Cother_priority%2Cfamily_representative&includeEstimates=true&summaryValues=count&taxonomy=ncbi&report=histogram&rank=species&cat=sequencing_status&xOpts=%2C%2C55%2C%2CEBP%20Affiliate&stacked=true&pointSize=15&size=10#long_list%3Ddtol%20AND%20sequencing_status%20AND%20tax_rank(species)) each status is represented by an attribute with a list of project names as values alongside a single sequencing_status attribute that shows the most advanced status across all projects. A separate summary attribute, sequencing_status_dtol, contains project-specific status within the DToL pipeline]{item xs=12 .paragraph}

:::

:::grid{container direction="row" toggle title="Case 4. Identifying gaps in sequencing across the Tree of Life" spacing="1"}

::grid[GoaT facilitates identification of underrepresented taxa and can therefore be an important tool for early stages of the preparation of grant proposals and target list generation. As more initiatives emerge, similar gap analysis will be increasingly relevant to achieve comprehensive coverage at different taxonomic levels across the wider EBP. Within the Arthropoda, for example, GoaT can be used to visualise underrepresented [classes](https://goat.genomehubs.org/search?query=tax_tree%28arthropoda%29%20AND%20tax_rank%28class%29%20AND%20assembly_span&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&offset=0&size=10&report=tree&y=assembly_span&treeStyle=ring&treeThreshold=2000&yOpts=1000000%2C10000000000&pointSize=25#tax_tree(arthropoda)%20AND%20tax_rank(class)%20AND%20assembly_span) and [families](https://goat.genomehubs.org/2022.11.16/search?query=tax_tree%28arthropoda%29%20AND%20tax_rank%28family%29%20AND%20assembly_span&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&offset=0&size=10&report=tree&y=assembly_span&treeStyle=ring&treeThreshold=-1&yOpts=1000000%2C10000000000&pointSize=25#tax_tree(arthropoda)%20AND%20tax_rank(family)%20AND%20assembly_span) in the set of available genome assemblies:]{item xs=12 .paragraph}



:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Arthropoda) AND tax_rank(class) AND assembly_span>0" y="assembly_span" treeStyle="ring" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=2 includeEstimates="true" excludeAncestral="bioproject" excludeMissing="long_list" collapseMonotypic disableModal item yOpts="10000,100000000000" caption="Distribution of sequencing effort in arthropod classes. Taxa with publicly available genome assemblies for any descendant taxon have an orange highlight and those without have a red highlight. Mouseover to display taxon names." xs=12}

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="tax_tree(Insecta) AND tax_rank(family) AND assembly_span>0" y="assembly_span" treeStyle="ring" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=2 includeEstimates="true" excludeAncestral="bioproject" excludeMissing="long_list" collapseMonotypic disableModal item yOpts="10000,100000000000" caption="Distribution of sequencing effort in arthropod families. Taxa with publicly available genome assemblies for any descendant taxon have an orange highlight and those without have a red highlight. Mouseover to display taxon names." xs=12}
:::



:::grid{container direction="row" toggle title="Case 5. Excluding taxa with outlier genome metadata from priority lists" spacing="1"}

::grid[Exclusion of taxa with known outlier values or likely estimates for attributes such as genome size, chromosome number, supernumerary chromosomes and sex determination system can help to maximise the chances of producing high quality reference assemblies. This is particularly true of projects focused on genomics of understudied taxa. The directly measured and estimated values in GoaT can be used to refine priority lists of target species, such as family or genus representatives, either by applying thresholds to queries or performing exploratory searches of pre-selected taxa.]{item xs=12 .paragraph}

::grid[Examples of strategies to remove outliers from target lists.]{item xs=12 .paragraph}
::grid[**A.** Using the query builder to refine a [query](https://goat.genomehubs.org/search?query=tax_tree%284678%5BAllium%5D%29%20AND%20tax_rank%28species%29%20AND%20genome_size%20%3C%20250000000000%20AND%20chromosome_number%20%3C%3D%2034%20AND%20ploidy%20%3C%204&result=taxon&fields=sample_acquired%2Cin_progress%2Csample_collected%2Csample_collected_by%2Csequencing_status%2Csequencing_status_dtol%2Clong_list%2Cother_priority%2Cfamily_representative&includeEstimates=true&summaryValues=count&taxonomy=ncbi#tax_tree(4678%5BAllium%5D)%20AND%20tax_rank(species)%20AND%20genome_size%20%3C%20250000000000%20AND%20chromosome_number%20%3C%3D%2034%20AND%20ploidy%20%3C%204) to exclude species with large chromosome size and chromosome number above a threshold of 34, and with ploidy greater than 4n:]{item xs=12 .paragraph}

::grid[![GoaT](/static/images/Query_builder2.png)]{item xs=12}

::grid[**B.** Exploratory [search](https://goat.genomehubs.org/search?result=taxon&fields=assembly_level%2Cassembly_span%2Cbioproject%2Cchromosome_number%2Chaploid_number%2Csex_determination%2Cploidy%2Cgenome_size&includeEstimates=true&summaryValues=count&ranks=phylum%2Ckingdom%2Csuperkingdom&taxonomy=ncbi&size=10&offset=0&names=&query=chromosome_number%20AND%20tax_tree%28Allium%29%20AND%20tax_rank%28species%29&excludeMissing%5B0%5D=ploidy&excludeAncestral%5B0%5D=ploidy&sortBy=chromosome_number&sortOrder=desc&report=scatter&y=genome_size%20AND%20ploidy&rank=species&plotRatio=auto&pointSize=20&xField=chromosome_number&scatterThreshold=10000#chromosome_number%20AND%20tax_tree(Allium)%20AND%20tax_rank(species)) of Allium species with ploidy varying from 2n to 8n. Taxa with the lowest values for chromosome number and genome size could be selected as genus representatives.]{item xs=12 .paragraph}

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="scatter" x="chromosome_number AND tax_tree(Allium)" xField="chromosome_number" y="genome_size AND ploidy" rank="species" includeEstimates="true" plotRatio="auto" scatterThreshold="10000" pointSize="20" result="taxon" taxonomy="ncbi" xs=12}

:::

### Executing
:::grid{container direction="row" toggle title="Case 6. How much should be sequenced?" spacing="1"}

::grid[Direct values and estimates of genome size provided by GoaT are extremely useful to predict sequencing effort  and are routinely used in the DToL sequencing pipeline. The DToL lab has implemented standard operating procedures for 10X, PacBio, and HiC to define the number of libraries produced and number of SMRT Cells/NovSeq Lanes used to reach predetermined yield per sample and target coverage required. The histograms below show the frequency distribution of genome size of species on GoaT with (a) and without (b) estimates. Not using estimates substantially restricts the amount of taxa for which informed decisions can be made.]{item xs=12 .paragraph}


::report{report="histogram" x="genome_size AND tax_tree(eukaryota)" rank="species" stacked="true" ratio=2 includeEstimates caption="frequency distribution of genome size of species on GoaT with estimates" item xs=6}

::report{report="histogram" x="genome_size AND tax_tree(eukaryota)" rank="species" stacked="true" ratio=2 includeEstimates="false" excludeAncestral="genome_size" excludeMissing="genome_size" caption="frequency distribution of genome size of species on GoaT without estimates" item xs=6}
:::


:::grid{container direction="row" toggle title="Case 7. Interpretation of Hi-C data" spacing="1"}

::grid[Expected chromosome number, ploidy, as well as chromosomal sex determination mechanism are valuable data when intepreting HiC maps to curate chromosome-level assemblies. All those, and other associated attributes for a species can be accessed on the records page on GoaT, which include the number and a list of all observations per attribute of a taxon. Each observation on the records page will  include links to the source for each individual record of a species' attribute, so users can double check the original description of the data. See an example for the beetle species [Euchroma gigantea](https://goat.genomehubs.org/record?recordId=1580703&result=taxon&taxonomy=ncbi#Euchroma%20gigantea)]{item xs=12 .paragraph}
:::

:::grid{container direction="row" toggle title="Case 8. Quality assessment of genome assembly and annotation" spacing="1"}

::grid[Quality control is an important step after an assembly is ready for submission. Comparative analyses based on scores of closely related taxa, provide a good estimate of the methodological quality of genome assemblies. A good example is comparison of busco completeness of closely related taxa, which can be visually assessed directly on trees using GoaT, as in the example below:]{item xs=12 .paragraph}

::report{report="tree" x="tax_tree(pteropodidae) AND tax_rank(species) AND assembly_span>0" y="busco_completeness" treeStyle="rect" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=4 includeEstimates="true" excludeAncestral="assembly_span" excludeMissing="assembly_span" collapseMonotypic disableModal item yOpts="1;100;;" caption="Busco completeness of sequenced pteropodid bat species" xs=12}
:::

### Reporting

:::grid{container direction="row" toggle title="Case 9. Exploring EBP dedicated pages on GoaT" spacing="1"}

::grid[As a genome metadata aggregator and to best serve the EBP community, GoaT UI is furnished with a section of [project-dedicated pages](/projects). Information about individual projects, such as their search term on GoaT, project identification number (e.g. Bioproject ID), as well as reports of planning, progress and completion of genome assemblies can be found in those pages. All project pages on GoaT will have a tree of declared target taxa (long_list), based on a pre-selected taxonomy backbone (default ncbi), and optional display of a progress metric or attribute. Usually trees highlight taxa in progress or those with completed assemblies alongside corresponding assembly span (see [DToL tree](https://goat.genomehubs.org/reporturl?result=taxon&taxonomy=ncbi&includeEstimates=true&treeStyle=rect&levels=subspecies%2Cspecies%2Cgenus%2Cfamily%2Corder%2Cclass%2Cphylum&collapseMonotypic=true&yOpts=10000%2C100000000000&caption=Phyla%20in%20the%20DToL%20long%20list.%20Orange%20highlights%20represent%20clades%20with%20at%20least%20one%20genome%20already%20published%20by%20DToL%20under%20the%20BioProject%20ID%20PRJEB40665.%20Tap%20tree%20nodes%20to%20browse%20taxa%20or%20long-press%20to%20search.&treeThreshold=2000&fields=assembly_level%2Cassembly_span%2Cchromosome_number%2Chaploid_number%2Cc_value%2Cgenome_size%2Cgenome_size_kmer%2Cgenome_size_draft%2Cbusco_completeness%2Cgc_percent%2Cbioproject%2Clong_list&report=tree&y=assembly_span%20AND%20bioproject%3DPRJEB40665&x=tax_tree%282759%29%20AND%20long_list%3DDTOL%20AND%20tax_rank%28Phylum%29)below), but virtually any attribute of interest can be plotted on the main tree. Trees are interactive: long-pressing on specific nodes results in expansion of the tree, but also in the list of taxa corresponding to that node (just as a query result), and values of their attributes selected for display (displayed columns). Tapping on specific nodes will direct users to the taxon record page, with a summary of all attributes on GoaT for that taxon.]{item xs=12 .paragraph}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=DTOL AND tax_rank(Phylum)" y="assembly_span AND bioproject=PRJEB40665" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="10000,100000000000" caption="Phyla in the DToL long list. Orange highlights represent clades with at least one genome already published by DToL under the BioProject ID PRJEB40665. Tap tree nodes to browse taxa or long-press to search." xs=12}
:::

:::grid{container direction="row" toggle title="Case 10. Generating progress and assembly quality reports for sequencing projects on GoaT" spacing="1"}

::grid[Most of the examples used as use cases so far correspond to searches using the taxon index. However, queries directly by assembly index are also possible and will result in all direct measurements for the assembly  attributes. For both taxon and assembly indices it is possible to generate a wide range of reports, such as  histograms, scatter, XInY (arc or rainbow plots), as well as trees. The available report types on GoaT are illustrated in the goat landing page, as well as in the project pages (See some examples of reports in the figures below). More documentation and tutorials will be made available on the [help tab](https://goat.genomehubs.org/help).]{item xs=12 .paragraph}


::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJEB40665" y="scaffold_n50" cat="assembly_type" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity assessment of DToL assemblies. EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb" xs=6}

::report{report="xInY" x="bioproject=PRJEB40665" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=dtol" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" item xs=6 caption="**DToL Contribution to Genome Assemblies Available in INSDC**  - Sequencing progress of DToL target taxa under DToL umbrella (Bioproject ID PRJEB40665)  at different taxonomic ranks."}
:::

### Data Exploration

The versatility with which combinations of  metadata can be queried in GoaT makes it a powerful resource to explore and discover biologically meaningful patterns across the tree of life. The possibility of generating basic graphical reports and trees directly from a query using the GoaT UI, also brings the advantage to allow pre-visualization of metadata trends. Users can then download the data to produce more sophisticated reports using their preferred data visualisation software. Examples of basic data exploration are illustrated on the Cases 11 and 12 as follows:


:::grid{container direction="row" toggle title="Case 11. Range of assembly span in plastid versus mitochondrial assemblies of plants" spacing="1"}

::grid[In plants, the [range of assembly span](https://goat.genomehubs.org/search?query=tax_tree%2835493%5BStreptophyta%5D%29%20and%20mitochondrion_assembly_span%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&offset=0&fields=mitochondrion_assembly_span%2Cmitochondrion_gc_percent%2Cplastid_assembly_span%2Cplastid_gc_percent&names=&ranks=&excludeAncestral%5B0%5D=gc_percent&excludeAncestral%5B1%5D=mitochondrion_assembly_span&report=scatter&rank=species&y=plastid_assembly_span&xOpts=30000%2C3000000%2C20&yOpts=30000%2C3000000%2C20&zScale=linear#tax_tree(35493[Streptophyta])%20and%20mitochondrion_assembly_span%20AND%20tax_rank(species)) is conservative for plastid, versus extremely broad for mitochondrial genomes. On the other hand, [GC content variation](https://goat.genomehubs.org/search?query=tax_tree%2835493%5BStreptophyta%5D%29%20and%20mitochondrion_gc_percent%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&offset=0&fields=mitochondrion_gc_percent%2Cplastid_gc_percent&names=&ranks=&excludeAncestral%5B0%5D=mitochondrion_gc_percent&excludeAncestral%5B1%5D=gc_percent&report=scatter&rank=species&y=plastid_gc_percent&xOpts=25%2C50%2C11&yOpts=25%2C50%2C11#tax_tree(35493[Streptophyta])%20and%20mitochondrion_gc_percent%20AND%20tax_rank(species)) is not substantial between plastid and mitochondrial plant assemblies, but consistently higher in mitochondrial (above 40%) versus plastid assemblies (below 40%).]{item xs=12 .paragraph}

::report{report="scatter" x="tax_tree(Streptophyta) AND mitochondrion_assembly_span" y="plastid_assembly_span" result="taxon" rank="species" includeEstimates="false" excludeAncestral="mitochondrion_assembly_span" excludeMissing="mitochondrion_assembly_span" xOpts="30000,3000000,12" yOpts="30000,1500000,15" scatterThreshold="10000" item caption="Distribution of mitochondria versus plastid assembly span among Streptophyta" xs=6}


::report{report="scatter" x="tax_tree(Streptophyta) AND mitochondrion_gc_percent" y="plastid_gc_percent" result="taxon" rank="species" includeEstimates="false" excludeAncestral="mitochondrion_gc_percent" excludeMissing="mitochondrion_gc_percent" xOpts="25,50,11" yOpts="25,50,11" scatterThreshold="10000" item caption="Distribution of mitochondria versus plastid GR percent among Streptophyta" xs=6}

:::

:::grid{container direction="row" toggle title="Case 12. Is there a correlation between the length of assemblies and gene content?" spacing="1"}

::grid[GoaT can be used to readily assess and visualise genome-relevant trends in the tree of life, such as investigate i f there is a correlation of assembly span and gene content across all assembly datasets, but also restrict the search to only chromosome-level assemblies, which is a subset of more complete datasets.]{item xs=12 .paragraph}


::report{report="scatter" x="assembly_span" y="gene_count" result="taxon" rank="species" cat="kingdom" xOpts=",,,log10" yOpts=",,,log10" scatterThreshold="10000" item caption="Correlation between assembly span and gene count across all INSDC assemblies" xs=6}

::report{report="scatter" x="assembly_span AND assembly_level=chromosome" y="gene_count" result="taxon" rank="species" cat="kingdom" xOpts=",,,log10" yOpts=",,,log10" scatterThreshold="10000" item caption="Correlation between assembly span and gene count across chromosome-level assemblies" xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

