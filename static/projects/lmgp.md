
::grid[![GoaT](/static/images/lilioid.png)]{item xs=3}

# Lilioid Monocots Core Group Genome Project

**GoaT Search Term:** LMGP

::grid[**LMGP** will sequence the genomes of representative species in each family of Liliales and Asparagales at the chromosomal level. This will help identify the genetic novelty underlying the innovation in flower morphology, geophyte, and secondary metabolites. For more information contact professor Jing Cai at jingcai (at) nwpu.edu.cn.]{item xs=8}

**Bioproject ID** PRJNA948806

**Main Contact**: jingcai(at)nwpu.edu.cn

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## LMGP Long List

:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/capra3.png)]{item xs=1} 
::grid[LMGP target and status list compilation is currently **in progress.** All data in GoaT currently corresponds to a subset of declared targets.]{item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Tree representing the declared target list of LMGP, highlighting species with available assemblies (green)



:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=LMGP" y="assembly_span AND bioproject=PRJNA948806" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=4 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Taxa in the declared target list of the LMGP project.** Orange highlights represent clades with at least one genome available under the LMGP Bioproject Id PRJNA948806. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## LMGP Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA948806" rank="phylum,class,order,family,genus,species" y="long_list=LMGP" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of LMGP Targets:** Genome assemblies under Bioproject ID PRJNA948806, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=LMGP" includeEstimates=true caption="**Counts of taxa targeted by LMGP**: All summary reports on GoaT are based on these counts" item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::


### Sequencing Status of LMGP Targets

* **sample_collected:** tissue is available for whole genome sequencing
* **sample_acquired:** samples received by the designated sequencing centers
* **in_progress:** includes sequencing, assembly and curation
* **open** data publicly available in a project-specific data store
* **insdc_open** assembly is publicly available on INSDC 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="histogram" x="long_list=LMGP AND sequencing_status_lmgp" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_lmgp=sample_collected,sample_acquired,in_progress,open,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of LMGP targets" item xs=6}

::report{report="histogram" x="bioproject=PRJNA948806" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete genome" includeEstimates excludeAncestral="bioproject" excludeMissing="bioproject" xOpts=",,1,, " caption="Assembly level for LMGP genomes" item xs=6}

### Contiguity assessment of LMGP assemblies. 

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA948806" y="scaffold_n50 AND bioproject_accession=PRJNA948806" cat="assembly_type=haploid@primary-haploid" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly type" pointSize=10 xs=6}

::report{report="scatter" x="contig_n50 AND bioproject_accession=PRJNA948806" y="scaffold_n50 AND bioproject_accession=PRJNA948806" cat="assembly_level=contig,scaffold,chromosome" result="assembly" xOpts="10000,1000000000,11,log10" yOpts="10000,1000000000,11,log10" scatterThreshold="10000" highlightArea="1000000,10000000,1000000000,1000000000,EBP metric zone" item caption="Contiguity by assembly level" pointSize=10 xs=6}

EBP metric zone defines the EBP assembly quality standards of a contig N50 > 1Mb and a scaffold N50 > 10Mb


:::grid{container direction="row" spacing="1" class="padded"}
:::

### Tree representing LMGP target list highlighting species currently in progress

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=LMGP" y="in_progress=LMGP" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the LMGP long list.** Orange highlights represent clades with at least one descendant species in progress in the LMGP pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Additional reports
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=LMGP" y="long_list=LMGP" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of LMGP target species collected" item xs=4}

::report{report="xInY" x="in_progress=LMGP" y="long_list=LMGP" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of LMGP target species with genome sequencing currently in progress" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
