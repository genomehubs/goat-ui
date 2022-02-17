::grid[![GoaT](/static/images/DToL_Logo_with_text.png)]{item xs=2}

# Darwin Tree of Life (DToL)
The Darwin Tree of Life project aims to sequence the genomes of all 70,000 species of eukaryotic organisms in Britain and Ireland. For more information, access their project page at https://www.darwintreeoflife.org.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## DTOL Species Sequencing Status

Counts of species and families that are in the Sample Tracking System at Sanger:

* **sample_collected** only includes those species entered in COPO/STS. In future it will include species reported by GALs as collected.
* **sample_acquired** means at least one sample is in the freezers at Sanger
* **in_progress** includes sequencing, assembly and curation
* **insdc_submitted** means the genome assembly is complete and being accessioned at INSDC
* **insdc_open** means the genome assembly is publicly available
* **published** means the genome note has been published

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="genome_size AND sequencing_status" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status=sample_collected,sample_acquired,in_progress,insdc_submitted,insdc_open,published" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" xOpts=",,-2,,Sequencing Status for DToL Target Species" item xs=6 caption=""}

::report{report="histogram" x="genome_size AND sequencing_status" rank="family" taxonomy="ncbi" result="taxon" cat="sequencing_status=sample_collected,sample_acquired,in_progress,insdc_submitted,insdc_open,published" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" xOpts=",,-2,,Sequencing Status for DToL Target Families" yOpts="0,500,2" item xs=6 caption=""}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

## DTOL Wish List

The Darwin Tree of Life wish list / long list includes over 75,000 species, as that is the number of eukaryotic species on the [United Kingdom Species Inventory](https://www.gbif.org/dataset/dbaa27eb-29e7-4cbb-8eab-3f689cfce116) published by the [Natural History Museum](https://www.nhm.ac.uk/our-science/data/uk-species.html).

### Genome assemblies already available for DTOL wish list, at different ranks:

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="assembly_span AND long_list=dtol" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=dtol" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" item xs=6 caption="Genome assemblies already available for DTOL wish list, at different ranks"}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Tree representing DTOL long list

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="tax_tree(Eukaryota) AND long_list=DTOL AND tax_rank(Phylum)" y="assembly_span" treeStyle="rect" taxonomy="ncbi" levels="species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="1000000,100000000000" caption="Phyla in the DTOL long list. Orange highlights represent clades with genomes already available. Tap tree nodes to browse taxa or long-press to search." xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Chromosome assemblies already available for DTOL wish list:

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="assembly_level=chromosome AND long_list=dtol" y="long_list=dtol" rank="species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Species in DToL target list with available chromosome-level assemblies" item xs=6}

::report{report="xInY" x="assembly_level=chromosome AND long_list=dtol" y="long_list=dtol" rank="family" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Families in DToL target list with available chromosome-level assemblies" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::
[back to projects](/projects)

