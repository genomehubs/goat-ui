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

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project=BAT1K bioproject=PRJNA489245 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Bat1K Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=BAT1K bioproject=PRJNA489245 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=BAT1K .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=BAT1K bioproject=PRJNA489245 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=BAT1K bioproject=PRJNA489245 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Bat1K Custom Reports

::include{pageId=/projects/reports/progress_tree.md project=BAT1K .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/contiguity_scatters.md project=BAT1K bioproject=PRJNA489245 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
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


[back to projects](/projects)

