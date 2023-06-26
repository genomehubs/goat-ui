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
## List of Atributes for Taxon and Assembly Indexes on GoaT
Attributes can be used as search terms in the search box and queried on respective types and summary functions.

Ex: 
- assembly_span AND insdc_open=ERGA AND tax_rank(family) [see query results](https://goat.genomehubs.org/search?query=assembly_span%20AND%20insdc_open%3DERGA%20AND%20tax_rank%28family%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi#assembly_span%20AND%20insdc_open%3DERGA%20AND%20tax_rank(family))
- contig_n50>=1000000 AND tax_tree(chiroptera) [see query result](https://goat.genomehubs.org/search?taxonomy=ncbi&query=contig_n50%3E%3D1000000%20AND%20tax_tree%28chiroptera%29&result=assembly&includeEstimates=true&summaryValues=count#contig_n50%3E%3D1000000%20AND%20tax_tree(chiroptera))



:::grid{container direction="row" toggle title="List of Taxon Attributes on GoaT" spacing="1" class="padded" item xs=12}
::report{report="types" result="taxon" item xs=12}
:::

:::grid{container direction="row" toggle title="List of Assembly Attributes on GoaT" spacing="1" class="padded" item xs=12}
::report{report="types" result="assembly" item xs=12}
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

::grid[GoaT facilitates identification of underrepresented taxa and can therefore be an important tool for early stages of the preparation of grant proposals and target list generation. As more initiatives emerge, similar gap analysis will be increasingly relevant to achieve comprehensive coverage at different taxonomic levels across the wider EBP. Within the Arthropoda, for example, GoaT can be used to visualise underrepresented [classes](https://goat.genomehubs.org/search?query=tax_tree%28arthropoda%29%20AND%20tax_rank%28class%29%20AND%20assembly_span&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&offset=0&size=10&report=tree&y=assembly_span&treeStyle=ring&treeThreshold=2000&yOpts=1000000%2C10000000000&pointSize=25#tax_tree(arthropoda)%20AND%20tax_rank(class)%20AND%20assembly_span) and [families](https://goat.genomehubs.org/search?query=tax_tree%28arthropoda%29%20AND%20tax_rank%28family%29%20AND%20assembly_span&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&offset=0&size=10&report=tree&y=assembly_span&treeStyle=ring&treeThreshold=-1&yOpts=1000000%2C10000000000&pointSize=25#tax_tree(arthropoda)%20AND%20tax_rank(family)%20AND%20assembly_span) in the set of available genome assemblies:]{item xs=12 .paragraph}



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
:::grid{container direction="row" toggle title="Case 6. Estimation of sequencing effort" spacing="1"}

::grid[[Direct values](https://goat.genomehubs.org/search?query=tax_tree%28eukaryota%29%20AND%20genome_size%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&report=histogram&rank=species&pointSize=20#tax_tree(eukaryota)%20AND%20genome_size%20AND%20tax_rank(species)) and [estimates](https://goat.genomehubs.org/search?query=tax_tree%28eukaryota%29%20AND%20genome_size%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&report=histogram&rank=species&pointSize=20#tax_tree(eukaryota)%20AND%20genome_size%20AND%20tax_rank(species)) of genome size provided by GoaT are routinely used in the DToL project to predict the sequencing effort required for a given taxon. DToL has implemented standard operating procedures for long read (PacBio HiFi), and long range (Hi-C) sequencing coverage required for assembly, and uses the expected genome size value from GoaT to determine the sequencing effort needed to reach the target sequencing depth for each sequencing platform. By including estimated values inferred by GoaT, we greatly increase the number of genome_size values. Genome sizes can be retrieved using a list of species as input, and searches can be performed at the level of genus or any higher taxonomic rank to retrieve estimates for taxa not yet present in the backbone taxonomies.]{item xs=12 .paragraph}

::grid[**Distribution of genome size values across species in GoaT:**]{item xs=12 .paragraph}

::report{report="histogram" x="tax_tree(eukaryota) AND genome_size" rank="species" ratio=1 includeEstimates="false" pointSize="20" result="taxon" taxonomy="ncbi" caption="Frequency distribution of genome size of species on GoaT, showing directly measured values only" item xs=6}

::report{report="histogram" x="genome_size AND tax_tree(eukaryota)" rank="species" ratio=1 includeEstimates pointSize="20" result="taxon" taxonomy="ncbi" caption="Frequency distribution of genome size of species on GoaT including estimated values" item xs=6}

:::


:::grid{container direction="row" toggle title="Case 7. Interpretation of Hi-C data" spacing="1"}

::grid[The DToL production team uses manual curation to create chromosomal assemblies using Hi-C maps and information about expected chromosome number, ploidy, and chromosomal sex determination mechanisms. GoaT provides a single portal for such information on the taxon record pages (Figure 13). Each taxon record page includes a full list of directly measured and estimated attribute values for the taxon. Details of the source for each attribute value are provided together with a link to allow direct access to the source data used in GoaT. See an example of a taxon record page for [Euchroma gigantea](https://goat.genomehubs.org/record?recordId=1580703&result=taxon&taxonomy=ncbi#Euchroma%20gigantea).This beetle has at least 6 cytotypes and multiple sex chromosome systems (ex: XXXYY; XXXYYY) resulting in drastically incompatible meiotic configurations between populations. Knowledge of these features aids in resolution of assembly issues.]{item xs=12 .paragraph}
:::

:::grid{container direction="row" toggle title="Case 8. Quality assessment of genome assembly and annotation" spacing="1"}

::grid[Quality control is important throughout the sequencing and assembly pipeline prior to public release. GoaT can be used to compare assembly metrics and scores with those of closely related taxa to provide an estimate of genome quality. For example, biological completeness, estimated using the Benchmarking Universal Single-Copy Orthologs (BUSCO) system, varies considerably between lineages for assemblies of comparable quality. GoaT allows these patterns to be visualised on [trees of related taxa](https://goat.genomehubs.org/search?query=tax_tree%28pteropodidae%29%20AND%20tax_rank%28species%29%20AND%20assembly_span&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&excludeMissing%5B0%5D=assembly_span&excludeAncestral%5B0%5D=assembly_span&report=tree&y=busco_completeness&treeStyle=rect&treeThreshold=2000&yOpts=1%3B100%3B%3B&size=10&pointSize=20&offset=0&fields=c_value%2Cgenome_size%2Cassembly_level%2Cassembly_span%2Cbusco_completeness%2Cgc_percent%2Cchromosome_number%2Chaploid_number&names=&ranks=#tax_tree(pteropodidae)%20AND%20tax_rank(species)%20AND%20assembly_span) to aid in assessing whether a given score is close to the expected value.]{item xs=12 .paragraph}

::report{report="tree" x="tax_tree(pteropodidae) AND tax_rank(species) AND assembly_span" y="busco_completeness" includeEstimates="false" collapseMonotypic disableModal yOpts="1;100;;" treeStyle="rect" treeThreshold="2000" pointSize="20" ratio=3 result="taxon" taxonomy="ncbi" caption="Tree report highlighting the distribution of BUSCO completeness scores among species in the bat family Pteropodidae with publicly available genome assemblies" xs=12}
:::

### Reporting

:::grid{container direction="row" toggle title="Case 9. Exploring EBP-affiliated project pages on GoaT" spacing="1"}

::grid[GoaT UI hosts dedicated [pages](/projects) for EBP-affiliated projects. See, for example the [DToL project page](https://goat.genomehubs.org/projects/DTOL). Each project page contains information about the project including its GoaT search term and BioProject ID alongside reports of planning, progress and completion of genome assemblies. The project page reports follow a common structure beginning with a tree of declared target taxa (long_list) based on the NCBI backbone taxonomy. In most instances, this tree also displays a progress metric or attribute and highlights taxa in progress or those with completed assemblies alongside corresponding assembly span. Trees are interactive: long-pressing on specific nodes results in expansion of the tree, and updating of the associated result table at the top of the page. Tapping on specific nodes opens the associated taxon record page, with a summary of all attributes for that taxon.]{item xs=12 .paragraph}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=DTOL AND tax_rank(Phylum)" y="assembly_span AND bioproject=PRJEB40665" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="10000,100000000000" caption="Tree report of phyla on the DToL long list showing representative assembly span of each phylum" xs=12}

::grid[Orange highlights show phyla with at least one assembly released under the DToL BioProject (PRJEB40665). Red highlights show phyla with no publicly available assemblies. Taxa in grey have at least one publicly available assembly but none under the DToL BioProject.]{item xs=12 .paragraph}
:::

:::grid{container direction="row" toggle title="Case 10. Generating progress and assembly quality reports for sequencing projects on GoaT" spacing="1"}

::grid[Each example in the previous use cases corresponds to searches using the **taxon index**. Similar queries may also be made using the **assembly index** with the key difference being that the results will contain one row per assembly rather than per taxon. A limitation of the taxon index is that values may be aggregated across multiple assemblies such that in a plot of contig N50 and scaffold N50 a taxon may be represented by values from different assemblies. Using the assembly index allows comparison of contig and scaffold N50s for each assembly in the DToL BioProject, highlighting that the majority fulfil the EBP criterion of contig N50 > 1Mb and scaffold N50 > 10Mb. The interactive nature of the reports allows outliers to be identified by clicking on the grid cells to refine the search.]{item xs=12 .paragraph}

::grid[Scatter report showing contiguity assessment of DToL genomes released under BioProject PRJEB40665:]{item xs=12 .paragraph}

::grid[ - [By assembly type](https://goat.genomehubs.org/search?palette=dark&report=scatter&query=contig_n50%20AND%20bioproject_accession%3DPRJEB40665&y=scaffold_n50%20AND%20bioproject_accession%3DPRJEB40665&cat=assembly_level%3Dchromosome%2Cscaffold%2Ccontig&result=assembly&xOpts=10000%2C1000000000%2C11%2Clog10&yOpts=10000%2C1000000000%2C11%2Clog10&scatterThreshold=10000&highlightArea=1000000%2C10000000%2C1000000000%2C1000000000%2CEBP%20metric%20zone&caption=Contiguity%20assessment%20of%20DToL%20assemblies.%20EBP%20metric%20zone%20defines%20the%20EBP%20assembly%20quality%20standards%20of%20a%20contig%20N50%20%3E%201Mb%20and%20a%20scaffold%20N50%20%3E%2010Mb&taxonomy=ncbi&xField=contig_n50&plotRatio=auto&pointSize=20&includeEstimates=false&summaryValues=count#contig_n50%20AND%20bioproject_accession%3DPRJEB40665)]{item xs=12 .paragraph}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJEB40665" y="scaffold_n50 AND bioproject_accession=PRJEB40665" cat="assembly_type" includeEstimates="false" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" plotRatio="auto" scatterThreshold="10000" pointSize="10" result="assembly" taxonomy="ncbi" caption="Highlighting assembly type with primary haploid and alternate haplotypes assemblies are shown in different colours" palette="dark" xs=8}

::grid[ - [By assembly level](https://goat.genomehubs.org/search?palette=dark&report=scatter&query=contig_n50%20AND%20bioproject_accession%3DPRJEB40665&y=scaffold_n50%20AND%20bioproject_accession%3DPRJEB40665&cat=assembly_level%3Dchromosome%2Cscaffold%2Ccontig&result=assembly&xOpts=10000%2C1000000000%2C11%2Clog10&yOpts=10000%2C1000000000%2C11%2Clog10&scatterThreshold=10000&highlightArea=1000000%2C10000000%2C1000000000%2C1000000000%2CEBP%20metric%20zone&caption=Contiguity%20assessment%20of%20DToL%20assemblies.%20EBP%20metric%20zone%20defines%20the%20EBP%20assembly%20quality%20standards%20of%20a%20contig%20N50%20%3E%201Mb%20and%20a%20scaffold%20N50%20%3E%2010Mb&taxonomy=ncbi&xField=contig_n50&plotRatio=auto&pointSize=20&includeEstimates=false&summaryValues=count#contig_n50%20AND%20bioproject_accession%3DPRJEB40665)]{item xs=12 .paragraph}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJEB40665" y="scaffold_n50 AND bioproject_accession=PRJEB40665" cat="assembly_level=chromosome,scaffold,contig" includeEstimates="false" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" plotRatio="auto" scatterThreshold="10000" pointSize="10" result="assembly" taxonomy="ncbi" aption="Highlighting assembly levels shown in different colours" palette="dark" xs=8}

:::

### Data Exploration

::grid[The versatility with which combinations of metadata can be queried in GoaT makes it a powerful resource to explore and discover biological patterns across the tree of life. The ability to generate reports directly from a query using the GoaT UI allows rapid visualisation of potential trends and can be used to identify the data to download for further analysis and visualisation in any external software. Cases 11 and 12 provide examples of basic data exploration to explore large-scale trends using the data in GoaT.]{item xs=12 .paragraph}


:::grid{container direction="row" toggle title="Case 11. Can plant plastid and mitochondrial assemblies be separated on the basis of GC content and span?" spacing="1"}

::grid[Plotting [GC content of plastids versus mitochondria](https://goat.genomehubs.org/search?query=tax_tree%2835493%5BStreptophyta%5D%29%20and%20mitochondrion_gc_percent%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&offset=0&fields=mitochondrion_gc_percent%2Cplastid_gc_percent&names=&ranks=&excludeAncestral%5B0%5D=mitochondrion_gc_percent&excludeAncestral%5B1%5D=gc_percent&report=scatter&rank=species&y=plastid_gc_percent&xOpts=25%2C50%2C11&yOpts=25%2C50%2C11&pointSize=10&highlightArea=y%3Dx&plotRatio=auto&scatterThreshold=10000#tax_tree(35493[Streptophyta])%20and%20mitochondrion_gc_percent%20AND%20tax_rank(species)) from plant (Streptophyta) species shows that they have comparable variation, but plastid GC content is always lower than mitochondrial GC content for a given taxon. For [assembly span](https://goat.genomehubs.org/search?query=tax_tree%2835493%5BStreptophyta%5D%29%20and%20mitochondrion_assembly_span%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&offset=0&fields=mitochondrion_assembly_span%2Cmitochondrion_gc_percent%2Cplastid_assembly_span%2Cplastid_gc_percent&names=&ranks=&excludeAncestral%5B0%5D=gc_percent&excludeAncestral%5B1%5D=mitochondrion_assembly_span&report=scatter&rank=species&y=plastid_assembly_span&xOpts=30000%2C3000000%2C20&yOpts=30000%2C3000000%2C20&zScale=linear&pointSize=10&highlightArea=y%3Dx&plotRatio=auto&scatterThreshold=1000#tax_tree(35493[Streptophyta])%20and%20mitochondrion_assembly_span%20AND%20tax_rank(species)), mitochondrial values are much more variable than plastid values. A few taxa have a greater plastid assembly span than mitochondrial assembly span, but the majority of taxa have a mitochondrial assembly span greater than the highest plastid value.]{item xs=12 .paragraph}


::grid[**Exploration of plastid and mitochondrial genome characteristics**: Scatter reports showing relationships between GC content and assembly span for plant mitochondrial and plastid genome assemblies for all Streptophyta species in INSDC that have both organellar genomes present.]{item xs=12 .paragraph}

::report{report="scatter" x="tax_tree(35493[Streptophyta]) AND mitochondrion_gc_percent" y="plastid_gc_percent" result="taxon" rank="species" includeEstimates="false" xOpts="25,50,11" yOpts="25,50,11" scatterThreshold="10000" highlightArea="y=x" plotRatio="auto" caption="Distribution of mitochondria versus plastid GR percent among Streptophyta" xs=5}

::report{report="scatter" x="tax_tree(35493[Streptophyta]) AND mitochondrion_assembly_span" y="plastid_assembly_span" result="taxon" rank="species" includeEstimates="false" xOpts="30000,3000000,20" yOpts="30000,3000000,20" scatterThreshold="10000" highlightArea="y=x" plotRatio="auto" caption="Distribution of mitochondria versus plastid assembly span among Streptophyta" xs=5}

:::

:::grid{container direction="row" toggle title="Case 12. Is there a correlation between the length of assemblies and gene content?" spacing="1"}

::grid[Genome size is known to be influenced by factors such as ploidy, repeat content, and intron length. Very small genomes may also have reduced gene number. To assess the extent to which there is a more general relationship between genome size and gene number in assembled genomes, [a report](https://goat.genomehubs.org/search?result=taxon&taxonomy=ncbi&report=scatter&query=assembly_span%20AND%20tax_rank%28species%29&y=gene_count&rank=species&cat=kingdom%3DFungi%2CMetazoa%2CViridiplantae&scatterThreshold=10000&pointSize=10&includeEstimates=false&summaryValues=count&size=10&plotRatio=auto#assembly_span%20AND%20tax_rank(species)) can be generated in GoaT of the relationship between assembly_span and gene_count.]{item xs=12 .paragraph}

::grid[All three eukaryotic kingdoms show a positive correlation across all assemblies. However, there are several outliers, including assemblies with over 2 million predicted genes:]{item xs=12 .paragraph}

::grid[Further filters can be applied to restrict the comparison to [only chromosomal assemblies](https://goat.genomehubs.org/search?result=taxon&taxonomy=ncbi&report=scatter&query=assembly_span%20AND%20tax_rank%28species%29%20AND%20assembly_level%20%3D%20chromosome&y=gene_count&rank=species&cat=kingdom%3DFungi%2CMetazoa%2CViridiplantae&scatterThreshold=10000&pointSize=25&includeEstimates=false&summaryValues=count&size=10#assembly_span%20AND%20tax_rank(species)%20AND%20assembly_level%20%3D%20chromosome), where the same trends remain apparent:]{item xs=12 .paragraph}

::report{report="scatter" x="assembly_span" y="gene_count" result="taxon" rank="species" cat="kingdom=Fungi,Metazoa,Viridiplantae" includeEstimates="false" plotRatio="auto" scatterThreshold="10000" pointSize="10" result="taxon" taxonomy="ncbi" xOpts=",,,log10" yOpts=",,,log10" caption="Correlation between assembly span and gene count across all INSDC assemblies" xs=5}


::report{report="scatter" x="assembly_span AND assembly_level=chromosome" y="gene_count" result="taxon" rank="species" cat="kingdom=Fungi,Metazoa,Viridiplantae" includeEstimates="false" plotRatio="auto" scatterThreshold="10000" pointSize="10" result="taxon" taxonomy="ncbi" xOpts=",,,log10" yOpts=",,,log10" caption="Correlation between assembly span and gene count across chromosome-level assemblies" xs=5}


:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

