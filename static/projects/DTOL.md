# Darwin Tree of Life (DToL)
The Darwin Tree of Life project aims to sequence the genomes of all 70,000 species of eukaryotic organisms in Britain and Ireland. For more information, access their project page at https://www.darwintreeoflife.org.

:::grid{container direction="row" spacing="1" xs=3}

![](/static/images/DToL_Logo_with_text.png)

:::

## DTOL Species Sequencing Status

Counts of species and families that are in the Sample Tracking System at Sanger:

* **sample_collected** only includes those species entered in COPO/STS. In future it will include species reported by GALs as collected.
* **sample_acquired** means at least one sample is in the freezers at Sanger
* **in_progress** includes sequencing, assembly and curation
* **insdc_submitted** means the genome assembly is complete and being accessioned at INSDC
* **insdc_open** means the genome assembly is publicly available
* **published** means the genome note has been published

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="genome_size AND sequencing_status" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status=sample_collected,sample_acquired,in_progress,insdc_submitted,insdc_open,published" includeEstimates="true" includeDescendants="true" xOpts=",,2" item xs=6 caption=""}

::report{report="histogram" x="genome_size AND sequencing_status" rank="family" taxonomy="ncbi" result="taxon" cat="sequencing_status=sample_collected,sample_acquired,in_progress,insdc_submitted,insdc_open,published" includeEstimates="true" includeDescendants="true" xOpts=",,2" item xs=6 caption=""}

:::

## DTOL Wish List

The Darwin Tree of Life wish list / long list includes over 75,000 species, as that is the number of eukaryotic species on the [United Kingdom Species Inventory](https://www.gbif.org/dataset/dbaa27eb-29e7-4cbb-8eab-3f689cfce116) published by the [Natural History Museum](https://www.nhm.ac.uk/our-science/data/uk-species.html).

### Genome assemblies already available for DTOL wish list, at different ranks:

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND long_list=dtol" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=dtol" item xs=6}

:::

## Tree representing DTOL long list

Orange highlights represent clades with genomes already available. Tap tree nodes to browse taxa or long-press to search:

:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=dtol AND tax_depth(3)" y="assembly_span>0" treeStyle="rect" taxonomy="ncbi" includeEstimates="true" ratio=3 disableModal="true" item xs=8}

:::

### Chromosome assemblies already available for DTOL wish list:

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_level=chromosome AND long_list=dtol" y="long_list=dtol" rank="species" item xs=4}

:::

[back to projects](/projects)