
::grid[![GoaT](/static/images/ogg.png)]{item xs=5}
# Open Green Genomes Initiative (OGG)
**GoaT Search Term:** OGG

::grid[**OGG** is an will generate high-quality genome assemblies and annotations for 35 species representing all major evolutionary lineages in the land plant tree of life. For more information, access OGG project page at https://phytozome-next.jgi.doe.gov/ogg/.]{item xs=8}

**Bioproject ID** OGG (placeholder aggregator)

**Main Contact**: James Leebens-Mack, University of Georgia

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## OGG Long List

The OGG targets 35+ species, representing major evolutionary lineages in the land plant tree of life.
OGG long list on GoaT corresponds to all declared targets in the [PGG target list](https://phytozome-next.jgi.doe.gov/ogg/) with available ncbi taxonomy IDs. To retrieve the list use the search terms:
- long_list=OGG 
- tax_rank(species)
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/capra3.png)]{item xs=1}
::grid[**Note:** JGI may have applied certain data [restrictions](https://phytozome-next.jgi.doe.gov/ogg/), which may cause discrepancies on sequencing_status reported on GoaT. Permission from PI and JGI before publications or data repackaging/redistribution may be required in a species/project specific manner.]{item xs=10}
:::
## Tree representing OGG target list highlighting species with available assemblies (orange-green)

:::grid{container direction="row" spacing="1" item xs=12}
::report{report="tree" x="long_list=OGG AND tax_rank(species)" y="assembly_span AND bioproject=OGG" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order" ratio=2 includeEstimates collapseMonotypic disableModal item yOpts="1000000,10000000000," caption="**Species in the declared target list of OGG.** Orange highlights represent clades with at least one genome available under the OGG BioProject ID placeholder aggregator (OGG). Bars = assembly span." xs=12}
:::
Tap tree nodes to browse taxa or long-press to search.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Sequencing Progress of OGG Target Taxa

Click on report to see and download individually.

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="bioproject=OGG" taxonomy="ncbi" rank="phylum,class,order,family,genus,species" y="long_list=OGG" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" item xs=6 caption="**OGG Contribution to Genome Assemblies Available in INSDC**  - Sequencing progress of OGG target taxa under OGG umbrella (Bioproject placeholder OGG)  at different taxonomic ranks."}

::report{report="xPerRank" x="long_list=OGG" includeEstimates=true caption="**Counts of taxa targeted by OGG**: All summary reports on GoaT are based on these counts" item xs=6}
:::

### Sequencing Status of OGG Targets

* **sample_collected:** tissue is available for whole genome sequencing
* **sample_acquired:** samples received by the designated sequencing centers
* **in_progress:** includes sequencing, assembly and curation
* **open** data publicly available in a project-specific data store
* **insdc_open** assembly is publicly available on INSDC 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="long_list=OGG AND sequencing_status_ogg" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_ogg=sample_collected,sample_acquired,in_progress,open,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of OGG targets" item xs=6}

::report{report="histogram" x="bioproject=OGG" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" xOpts=",,1,, " caption="Assembly level for OGG genomes" item xs=6}

### Contiguity assessment of OGG assemblies. 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="scatter" x="contig_n50 AND bioproject_accession=OGG" y="scaffold_n50 AND bioproject_accession=OGG" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly type" pointSize=10 xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=OGG" y="scaffold_n50 AND bioproject_accession=OGG" cat="assembly_level=contig,scaffold,chromosome" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly level" pointSize=10 xs=6}

EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb


:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)

