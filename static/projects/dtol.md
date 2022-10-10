::grid[![GoaT](/static/images/tol_logo_words.png)]{item xs=2}

# Darwin Tree of Life (DToL)
**GoaT Search Term:** DTOL

::grid[The Darwin Tree of Life project aims to sequence the genomes of all eukaryotic species in Britain and Ireland. For more information, access DToL's project page at https://www.darwintreeoflife.org.]{item xs=8}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## DToL Long List

The Darwin Tree of Life long list (all targets) includes all 75,000 eukaryotic species on the [United Kingdom Species Inventory](https://www.gbif.org/dataset/dbaa27eb-29e7-4cbb-8eab-3f689cfce116) published by the [Natural History Museum](https://www.nhm.ac.uk/our-science/data/uk-species.html).

## Tree representing DToL target list highlighting phyla with available assemblies (orange)

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="tax_tree(Eukaryota) AND long_list=DTOL AND tax_rank(Phylum)" y="assembly_span AND bioproject=PRJEB40665" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="10000,100000000000" caption="**Phyla in the DToL long list.** Orange highlights represent clades with at least one genome already published by DToL under the BioProject ID PRJEB40665. Red highlights represent taxa without assemblies on INSDC; target taxa with assemblies available under other bioproject IDs are shown in grey. Bars correspond to assembly span estimates for each family. Tap tree nodes to browse taxa or long-press to search." xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of DToL Target Taxa 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="bioproject=PRJEB40665" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=dtol" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" item xs=6 caption="**DToL Contribution to Genome Assemblies Available in INSDC**  - Sequencing progress of DToL target taxa under DToL umbrella (Bioproject ID PRJEB40665)  at different taxonomic ranks."}

::report{report="xPerRank" x="long_list=DTOL" includeEstimates=true caption="**Counts of taxa targeted by DToL**: All summary reports on GoaT are based on these counts" item xs=6}
:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



### Contribution of DToL to Available Chromosome-level Assemblies

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="bioproject=PRJEB40665" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" xOpts=",,1,, " caption="Assembly level for DToL genomes" item xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJEB40665" y="scaffold_n50 AND bioproject_accession=PRJEB40665" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity assessment of DToL assemblies. EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb" xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Status of DToL Targets

* **sample_collected** only includes species collected by the [NHM](https://data.nhm.ac.uk/), those entered in [COPO](https://copo-project.org) and in the Wellcome Sanger Institute internal Sample Tracking System (STS). In the future it will include species reported by all DToL partners as collected.
* **sample_acquired** correspond to species with samples on site at the Wellcome Sanger Institute
* **in_progress** includes sequencing, assembly and curation

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="sample_collected=DTOL" y="long_list=DTOL" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="**sample_collected** - Total of DToL target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=DTOL" y="long_list=DTOL" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="**sample_acquired** - Total of DToL target species ready for sequencing at Sanger" item xs=4}

::report{report="xInY" x="in_progress=DTOL" y="long_list=DTOL" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="**in_progress** - Total of DToL target species in progress at Sanger" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)

