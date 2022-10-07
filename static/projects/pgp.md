
::grid[![GoaT](/static/images/polar.jpeg)]{item xs=3}


# Polar Genomes Project
**GoaT Search Term:** PGP


::grid[**Polar Genomes Project** will foster research on the unique features and functions of the genome that enable unique and powerful biological processes in polar organisms. For more information access https://eng.kopri.re.kr/eng/html/rsch/020102.html?mode=V&mng_no=141.]{item xs=8}

**Bioproject ID** TBD

::grid[ ]{item xs=4}


:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the declared targets of Polar Genomes Project highlighting species currently in progress

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=PGP" y="in_progress=PGP" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=4.8 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the Polar Genomes Project target list.** Orange highlights represent clades with at least one descendant species in progress in the Polar Genomes Project pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## Polar Genomes Project Progress Reports
### Progress of Genome Sequencing by Taxon Rank and Sequencing Status of PGP Target Species
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=XXTBDXX" rank="phylum,class,order,family,genus,species" y="long_list=Polar Genomes Project" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of Polar Genomes Project Targets:** Genome assemblies under Bioproject ID **TBD**, at different taxonomic ranks" item xs=4}

::report{report="xPerRank" x="long_list=PGP" includeEstimates=true caption="**Counts of taxa declared as targets by the Polar Genomes Project**: All summary reports on GoaT are based on these counts" item xs=4}

::report{report="histogram" x="long_list=PGP AND sequencing_status_pgp" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_pgp=sample_collected,sample_acquired,in_progress,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of Polar Genomes Project targets" item xs=4}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::


:::grid{container direction="row" toggle title="Polar Genomes progress: cumulative number of species per status" spacing="1"}

::report{report="xInY" x="sample_collected=PGP" y="long_list=PGP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of PGP target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=PGP" y="long_list=PGP" rank="species" includeEstimates=true excludeAncestral="sample_acquired" excludeMissing="sample_acquired" caption="Total of PGP target species already received by assigned sequencing centers" item xs=4}

::report{report="xInY" x="in_progress=PGP" y="long_list=PGP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of PGP target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
