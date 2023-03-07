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
Sequencing genomes at scale requires careful coordination to prevent duplication of efforts. Metadata stored in GoaT can be used in different steps in the planning and progressing of sequencing projects. Here we describe Use Cases that can be adopted from planning to completion by any sequencing initiative in the EBP Network. We mostly use the Darwin Tree of Life (DTOL) to illustrate different scenarios, but any project can retrieve the equivalent information using their respective acronym or Bioproject ID, listed on GoaT [projects](/projects) tab, instead of "DTOL" in the examples below.

### Planning

:::grid{container direction="row" toggle title="Case 1. Which species on a target list have already been sequenced to the desired standards?" spacing="1"}

::grid[GoaT stores 3 categories of target lists to help distinguish taxa that are likely to be sequenced in the long versus short-term: long_list includes all targets of a project, whereas family_representative and other_priority, are subsets of species in the long_list that will be prioritised. Refining a target list includes removing any species for which an assembly meeting the project's criteria is already available and coordinating cases of overlap with different sequencing initiatives. ]{item xs=12 .paragraph}

::grid[As an example, the DTOL project aims to sequence all ~70,000 eukaryotic species in the UK and Ireland, i.e. the long_list for DTOL includes all ~70,000 species. High quality chromosome level genome assemblies already exist for several hundred of these species as shown in the [search results](http://goat.genomehubs.org/searchurl?result=taxon&taxonomy=ncbi&includeEstimates=true&excludeMissing%5B0%5D=long_list&excludeMissing%5B1%5D=bioproject&excludeAncestral%5B0%5D=long_list&treeStyle=ring&treeThreshold=20000&levels=subspecies%2Cspecies%2Cgenus%2Cfamily%2Corder%2Cclass%2Cphylum%2Ckingdom&collapseMonotypic=true&yOpts=10000%2C100000000000&caption=DToL%20targets%20not%20under%20BioProject%20ID%20PRJEB40665.&query=bioproject%21%3DPRJEB40665%20AND%20long_list%3Ddtol%20AND%20assembly_level%3Dchromosome%20AND%20tax_rank%28species%29%20AND%20tax_tree%282759%29&fields=assembly_level%2Cassembly_span%2Cbioproject%2Ccontig_n50%2Cscaffold_n50%2Clong_list&report=tree&y=contig_n50%3E1000000%20AND%20scaffold_n50%3E10000000&offset=0&names=&ranks=#bioproject!%3DPRJEB40665%20AND%20long_list%3Ddtol%20AND%20assembly_level%3Dchromosome%20AND%20tax_rank(species)%20AND%20tax_tree(Eukaryota)}), which can be removed from the DToL 'to do' list.]{item xs=12 .paragraph}

 

::report{report="tree" x="bioproject!=PRJEB40665 AND long_list=dtol AND assembly_level=chromosome AND tax_rank(species)" y="contig_n50>1000000 AND scaffold_n50>10000000" treeStyle="ring" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=2 includeEstimates="true" excludeAncestral="bioproject" excludeMissing="long_list" collapseMonotypic disableModal item yOpts="10000,100000000000" caption="DToL targets already sequenced by other projects (not under BioProject ID PRJEB40665), with chromosome-level assemblies and meeting EBP metrics standards." xs=12}
:::


:::grid{container direction="row" toggle title="Case 2. What species in the DToL long list are also targeted by other projects and is any declared as a priority by another project?" spacing="1"}

::grid[GoaT can generate a [list of overlaps](https://goat.genomehubs.org/search?query=tax_rank%28species%29%20AND%20long_list%3Ddtol%20AND%20length%28long_list%29%3E1&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&offset=0&fields=sequencing_status%2Clong_list%2Cother_priority%2Cfamily_representative&names=&ranks=#tax_rank(species)%20AND%20long_list%3Ddtol%20AND%20length(long_list)%3E1) between projects using the length(long_list)>1 operation on the search box, which will return any taxon for which there is more than one value represented in the column for long_list. The same search can be used to generate the following arc report of how many of the DToL targets are shared with other projects]{item xs=12 .paragraph}



::report{report="xInY" x="long_list=dtol AND length(long_list)>1" y="long_list=dtol" rank="species" includeEstimates excludeAncestral="long_list" excludeMissing="long_list" caption="Total of DToL target species also targeted by other projects in the EBP affiliated network" item xs=4}

::report{report="xInY" x="other_priority!=dtol" y="long_list=dtol" rank="species" includeEstimates excludeAncestral="long_list" excludeMissing="long_list" caption="Total of DToL target species that have been declared as priority taxa for other projects in the EBP affiliated network" item xs=4}

::report{report="xInY" x="family_representative!=dtol" y="long_list=dtol" rank="species" includeEstimates excludeAncestral="long_list" excludeMissing="long_list" caption="Total of DToL target species that have been declared as family representatives for other projects in the EBP affiliated network" item xs=4}

:::

:::grid{container direction="row" toggle title="Case 3. Sequencing status and coordination between sampling working groups and sequencing centres" spacing="1"}

::grid[It is expected that as multiple projects progress, status change and new information is available. Informing and retrieving sampling and sequencing status can be used as a powerful tool to coordinate, cease or split tasks between sampling working groups and sequencing centres. GoaT has a general sequecning_status attribute for taxa, but it is also possible to query squencing statuses of specific projects using the project acronym: ex: **sequencing_status_dtol** ]{item xs=12 .paragraph}

::grid[An example of sequencing status query can be accessed [here](https://goat.genomehubs.org/searchurl?query=tax_rank%28species%29%20AND%20long_list%3Ddtol%20AND%20sequencing_status&result=taxon&fields=sample_acquired%2Cin_progress%2Csample_collected%2Csample_collected_by%2Csequencing_status%2Csequencing_status_dtol%2Clong_list%2Cother_priority%2Cfamily_representative&includeEstimates=true&summaryValues=count&taxonomy=ncbi#tax_rank(species)%20AND%20long_list%3Ddtol%20AND%20sequencing_status})]{item xs=12 .paragraph}

:::

:::grid{container direction="row" toggle title="Case 4. Identifying gaps in sequencing across the Tree of Life" spacing="1"}

::grid{container direction="row" spacing="1" class="padded"}

::grid[In cases of restricted resources, new projects might want to focus their efforts towards undersequenced taxa. GoaT is then an important tool even for early stages of grant proposal writing and target list generation. This type of gap analysis will be increasingly relevant for comprehensive coverage of missing taxa, as more initiatives emerge. In the example figures below, GoaT search was used to find (a) underrepresented [classes among arthropod assemblies](https://goat.genomehubs.org/search?query=tax_tree%28arthropoda%29%20AND%20tax_rank%28class%29%20AND%20assembly_span%3E0&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&offset=0&size=100&report=tree&y=assembly_span&treeStyle=ring&treeThreshold=2000&yOpts=1000000%2C10000000000#tax_tree(arthropoda)%20AND%20tax_rank(class)%20AND%20assembly_span%3E0), and (b) underrepresented [insect families](https://goat.genomehubs.org/search?query=tax_tree%28insecta%29%20AND%20tax_rank%28family%29&result=taxon&includeEstimates=true&summaryValues=count&taxonomy=ncbi&size=100&report=tree&y=assembly_span%3E0&treeStyle=ring&treeThreshold=2000#tax_tree(insecta)%20AND%20tax_rank(family)):]{item xs=12 .paragraph}



:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Arthropoda) AND tax_rank(class) AND assembly_span>0" y="assembly_span" treeStyle="ring" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=2 includeEstimates="true" excludeAncestral="bioproject" excludeMissing="long_list" collapseMonotypic disableModal item yOpts="10000,100000000000" caption="Underrepresented classes among arthropod assemblies (grey). Orange highlights correspond to atrhopod classes for which at least one assembly has been generated. Grey correspond to taxa without any sequenced representative" xs=12}

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="tax_tree(Insecta) AND tax_rank(family) AND assembly_span>0" y="assembly_span" treeStyle="ring" treeThreshold=20000 taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum,kingdom" ratio=2 includeEstimates="true" excludeAncestral="bioproject" excludeMissing="long_list" collapseMonotypic disableModal item yOpts="10000,100000000000" caption="Underrepresented classes among arthropod assemblies (grey). Orange highlights correspond to insect families for which at least one assembly has been generated. Grey correspond to taxa without any sequenced representative" xs=12}
:::



:::grid{container direction="row" toggle title="Case 5. Excluding taxa with outlier genome metadata from priority lists" spacing="1"}

::grid[Selection of priority target species, such as family representatives, especially in understudied taxa should be based on informed decision. Exclusion of taxa presenting outlier values or estimates for attributes such as genome size, chromosome number, supernumerary chromosomes, sex determination system is desirable to maximize chances of good reference assemblies, and GoaT estimates can aid in such decisions either by the use of thresholds in queries (see image below) or performing exploratory searches of pre-selected taxa]{item xs=12 .paragraph}

::grid[![GoaT](/static/images/Query_builder.png)]{item xs=12}

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

