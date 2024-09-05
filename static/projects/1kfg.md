::grid[![GoaT](/static/images/1kfg2.png)]{size=4}

# 1,000 Fungal Genomes Project (1KFG)

**GoaT Search Term:** 1KFG

::grid[**1KFG** is an effort to sample the genomic diversity of the fungal kingdom focusing on phylogenetic diversity. One phase of the project supported by a Community Sequencing Project at the Joint Genome Institute. For more information, access 1KFG project page at https://1000.fungalgenomes.org/.]{size=8}

**Bioproject ID** 1KFG (placeholder aggregator)

**Main Contact**: 1KFG Project Management - https://1000.fungalgenomes.org/contact/

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## 1KFG Long List

The 1KFG targets 1,000+ species, representing every family of fungi. Nominations can be made using the [Mycocosm portal](https://mycocosm.jgi.doe.gov/pages/fungi-1000-projects.jsf).
1KFG long list on GoaT corresponds to all declared targets in the [MycoCosm Genomes list](https://mycocosm.jgi.doe.gov/1000_fungi_project/1000_fungi_project.info.html) and the 1KFG Study at the [GOLD database](https://gold.jgi.doe.gov/projects?page=1&Study.GOLD+Study+ID=Gs0000001&Project.Sequencing+Strategy=Whole+Genome+Sequencing). To retrieve the list use the search terms:

- long_list=1KFG
- tax_rank(species)
  :::grid{container direction="row" spacing="1" class="padded"}
  :::

:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/1KFG_logo.svg)]{size=1}
::grid[**Note:** JGI may have applied certain data restrictions, which may cause discrepancies on sequencing_status reported on GoaT. Permission from PI and JGI before publications or data repackaging/redistribution may be required in a species/project specific manner.]{size=10}
:::

## Tree representing 1KFG target list highlighting species with available assemblies (orange-green)

:::grid{container direction="row" spacing="1" size=12}
::report{report="tree" x="long_list=1KFG AND tax_rank(species)" y="assembly_span AND bioproject=1KFG" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="100000,1000000000," caption="**Species in the declared target list of 1KFG.** Orange highlights represent clades with at least one genome available under the 1KFG BioProject ID 1KFG. Bars = assembly span." size=12}
:::
Tap tree nodes to browse taxa or long-press to search.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of 1KFG Target Taxa

Click on report to see and download individually.

:::grid{container direction="row" spacing="1" size=12}

::report{report="xInY" x="bioproject=1KFG" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=1KFG" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" size=6 caption="**1KFG Contribution to Genome Assemblies Available in INSDC** - Sequencing progress of 1KFG target taxa under 1KFG umbrella (Bioproject placeholder 1KFG) at different taxonomic ranks."}

::report{report="xPerRank" x="long_list=1KFG" includeEstimates=true caption="**Counts of taxa targeted by 1KFG**: All summary reports on GoaT are based on these counts" size=6}
:::

### Sequencing Status of 1KFG Targets

- **sample_collected:** tissue is available for whole genome sequencing
- **sample_acquired:** samples received by the designated sequencing centers
- **in_progress:** includes sequencing, assembly and curation
- **open** data publicly available in a project-specific data store
- **insdc_open** assembly is publicly available on INSDC

:::grid{container direction="row" spacing="1" size=12}

::report{report="histogram" x="long_list=1KFG AND sequencing_status_1kfg" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_1kfg=sample_collected,sample_acquired,in_progress,open,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of 1KFG targets" size=6}

::report{report="histogram" x="bioproject=1kfg" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" xOpts=",,1,, " caption="Assembly level for 1KFG genomes" size=6}

### Contiguity assessment of 1KFG assemblies.

:::grid{container direction="row" spacing="1" size=12}

::report{report="scatter" x="contig_n50 AND bioproject_accession=1kfg" y="scaffold_n50 AND bioproject_accession=1kfg" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" caption="Contiguity by assembly type" pointSize=10 size=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=1KFG" y="scaffold_n50 AND bioproject_accession=1KFG" cat="assembly_level=contig,scaffold,chromosome" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" caption="Contiguity by assembly level" pointSize=10 size=6}

EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
