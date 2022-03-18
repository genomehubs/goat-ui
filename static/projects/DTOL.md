::grid[![GoaT](/static/images/DToL_Logo_with_text.png)]{item xs=2}

# Darwin Tree of Life (DTOL)
The Darwin Tree of Life project aims to sequence the genomes of all eukaryotic species in Britain and Ireland. For more information, access DToL's project page at https://www.darwintreeoflife.org.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## DToL Long List

The Darwin Tree of Life long list (all targets) includes all 75,000 eukaryotic species on the [United Kingdom Species Inventory](https://www.gbif.org/dataset/dbaa27eb-29e7-4cbb-8eab-3f689cfce116) published by the [Natural History Museum](https://www.nhm.ac.uk/our-science/data/uk-species.html).
:::grid{container direction="row" spacing="1" class="padded"}
:::

### Tree Representing DToL Long List

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="tax_tree(Eukaryota) AND long_list=DTOL AND tax_rank(Phylum)" y="assembly_span" treeStyle="rect" taxonomy="ncbi" levels="species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="10000,100000000000" caption="Phyla in the DToL long list. Orange highlights represent clades with at least one genome already available. Tap tree nodes to browse taxa or long-press to search." xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of DToL Target Taxa 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="assembly_span AND long_list=dtol" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=dtol" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" item xs=6 caption="**DToL Targets with Genomes Available in INSDC** - Sequencing progress of DToL target taxa at different taxonomic ranks. "}


::report{report="xInY" x="assembly_span AND bioproject=PRJEB40665" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=dtol" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" item xs=6 caption="**DToL Contribution to Genome Assemblies Available in INSDC**  - Sequencing progress of DToL target taxa under DToL umbrella (Bioproject ID PRJEB40665)  at different taxonomic ranks."}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



### Contribution of DToL to Available Chromosome-level Assemblies

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="assembly_span AND long_list=DTOL" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" xOpts=",,-2,,Assembly level" caption="Available genomes for DToL target secies, by assembly level" item xs=6}

::report{report="xInY" x="assembly_level=chromosome AND bioproject=PRJEB40665" y="assembly_level=chromosome AND long_list=DTOL" rank="species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Species with available chromosome-level assemblies contributed by DToL" item xs=6}


:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Status of DToL Targets

* **sample_collected** only includes species collected by the [NHM](https://data.nhm.ac.uk/), those entered in [COPO](https://copo-project.org) and in the Wellcome Sanger Institute internal Sample Tracking System (STS). In the future it will include species reported by all DToL partners as collected.
* **sample_acquired** means at least one sample is in the freezers at Sanger
* **in_progress** includes sequencing, assembly and curation

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="sample_collected=DTOL" y="long_list=DTOL" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="**sample_collected** - Total of DToL target species collected" item xs=4}

::report{report="xInY" x="sample_acquired=DTOL" y="long_list=DTOL" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="**sample_acquired** - Total of DToL target species ready for sequencing at Sanger" item xs=4}

::report{report="xInY" x="in_progress=DTOL" y="long_list=DTOL" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="**in_progress** - Total of DToL target species in progress at Sanger" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)

