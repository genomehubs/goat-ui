::grid[![GoaT](/static/images/Bat1k-logo1.png)]{item xs=2}

# 1,000 Bat Genomes (Bat1K)
**GoaT Search Term:** BAT1K

::grid[**Bat1K** is an initiative to sequence the genomes of all living bat species, approximately 1,400 species in total. The main goal of this consortium is to uncover the genes and genetic mechanisms behind the unusual adaptations of bats. For more information, access BAT1K project page at https://bat1k.com/.]{item xs=8}

**Bioproject ID** PRJNA489245

**Main Contact**: Bat1K Project Management - https://bat1k.com/contact-us/

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## Bat1K Long List

The Bat1K targets approximately [1,400 species](https://batnames.org/). 
Bat1k long list on GoaT correspond to all declared targets. To retrieve the list use the search terms:
- long_list=bat1k 
- tax_rank(species)


## Tree representing Bat1K target list highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="tax_tree(Chiroptera) AND long_list=BAT1K AND tax_rank(species)" y="assembly_span AND bioproject=PRJNA489245" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="10000,3000000000,,linear" caption="**Species in the declared target list of BAT1K.** Orange highlights represent clades with at least one genome available under the Bat1K BioProject ID PRJNA489245. Bars = assembly span." xs=12}
:::
Tap tree nodes to browse taxa or long-press to search.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of Bat1K Target Taxa

Click on report to see and download individually.

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="bioproject=PRJNA489245" taxonomy="ncbi" rank="order,family,genus,species" y="long_list=BAT1K" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" item xs=6 caption="**Bat1K Contribution to Genome Assemblies Available in INSDC**  - Sequencing progress of Bat1K target taxa under BAT1K umbrella (Bioproject ID PRJNA489245)  at different taxonomic ranks."}

::report{report="xPerRank" x="long_list=BAT1K" includeEstimates=true caption="**Counts of taxa targeted by Bat1K**: All summary reports on GoaT are based on these counts" item xs=6}
:::

### Sequencing Status of Bat1K Targets

* **sample_collected:** tissue is available for whole genome sequencing
* **sample_acquired:** samples received by the designated sequencing centers
* **in_progress:** includes sequencing, assembly and curation
* **open** data publicly available in a project-specific data store
* **insdc_open** assembly is publicly available on INSDC 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="long_list=BAT1K AND sequencing_status_BAT1K" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_bat1k=sample_collected,sample_acquired,in_progress,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of Bat1K targets" item xs=6}

::report{report="histogram" x="bioproject=PRJNA489245" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" xOpts=",,1,, " caption="Assembly level for Bat1K genomes" item xs=6}

### Contiguity assessment of BAT1K assemblies. 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA489245" y="scaffold_n50 AND bioproject_accession=PRJNA489245" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly type" pointSize=10 xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA489245" y="scaffold_n50 AND bioproject_accession=PRJNA489245" cat="assembly_level=contig,scaffold,chromosome" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly level" pointSize=10 xs=6}

EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb
:::

## Bat1K Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=BAT1K bioproject=PRJNA489245 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=BAT1K .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=BAT1K bioproject=PRJNA489245 .inline}

::include{pageId=/projects/reports/progress_tree.md project=BAT1K .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)

