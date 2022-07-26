
::grid[![GoaT](/static/images/ILEBP2.png)]{item xs=12}
:::grid{container direction="row" spacing="1" class="padded"}
:::

# Illinois EBP Pilot
**GoaT Search Term:** ILEBP


::grid[**The Illinois EBP Pilot Project** will sequence the genomes of agriculturally relevant insects for which little or no genomic data are available. Sequencing these focal taxa will demonstrate project scalability, communicate scientific discovery, and inspire potential economic and societal benefits. Currently, assemblies for all targets of Illinois EBP Pilot project have been produced and submited to insdc. Data will become publically available soon.  For more information access https://mediaspace.illinois.edu/media/t/1_f7cpkins.]{item xs=8}

**Bioproject ID** PRJNA844590

**Main Contact**: [Christopher Dietrich](https://experts.illinois.edu/en/persons/christopher-h-dietrich),  University of Illinois at Urbana Champaign, USA

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing Illinois EBP Pilot target list, highlighting species with assemblies in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ILEBP AND tax_rank(species)" y="sequencing_status_ilebp=in_progress" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=5 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Tree representing the target list of Illinois EBP Pilot Project.** Orange highlights represent clades with at least one genome already submitted under the Bioproject ID PRJNA844590, which will be made publically available with associated manuscripts in the near future. These species, are listed in GoaT as sequencing status = 'in_progress' and are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## Illinois EBP Pilot Progress Reports
### Progress of Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA844590" rank="class,order,family,genus,species" y="long_list=ILEBP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of Illinois EBP Pilot Project Targets:** Genome assemblies under Bioproject ID PRJNA844590, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ILEBP" includeEstimates=true caption="**Counts of taxa targeted by the Illinois EBP Pilot Project**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Progress of Illinois EBP Pilot Project

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="long_list=ILEBP AND sequencing_status_ilebp" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_ilebp=sample_collected,sample_acquired,in_progress,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of ILEBP targets" item xs=6}

::report{report="histogram" x="long_list=ILEBP" rank="species" taxonomy="ncbi" result="taxon" cat="order[10]+" excludeAncestral="bioproject" excludeMissing="long_list" xOpts="ILEBP,,1,," caption="Number of species in each insect order targeted by Illinois EBP Pilot " item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::


:::grid{container direction="row" toggle title=" Illinois EBP Pilot progress: cumulative number of species per status" spacing="1"}

::report{report="xInY" x="sample_collected=ILEBP" y="long_list=ILEBP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of Illinois EBP Pilot target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=ILEBP" y="long_list=ILEBP" rank="species" includeEstimates=true excludeAncestral="sample_acquired" excludeMissing="sample_acquired" caption="Total of Illinois EBP Pilot target species already received by assigned sequencing centers" item xs=4}

::report{report="xInY" x="in_progress=ILEBP" y="long_list=ILEBP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of Illinois EBP Pilot target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
