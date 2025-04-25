::grid[![GoaT](/static/images/hprc.png)]{size=2}

# Human Pan Genome Reference Consortium (HPRC)

**GoaT Search Term:** HPRC

::grid[**The Human Pan Genome Reference Consortium (HPRC)** is a project funded by the National Human Genome Research Institute to sequence and assemble genomes from individuals from diverse populations in order to better represent the genomic landscape of diverse human populations. For more information, access HPRC’s project page at: https://humanpangenome.org/]{size=10}

**Bioproject ID** PRJNA730822

**Main Contact**: HPRC Data Management - hprc@ucsc.edu

**Resources:**
Click to be redirected to one of HPRC public resources:

- [**Assemblies and data indices on GitHub**](https://github.com/human-pangenomics/hprc_intermediate_assembly/tree/main/data_tables)
- [**List of HPRC assemblies on GoaT**](https://goat.genomehubs.org/search?query=Bioproject%3DPRJNA730822%20AND%20assembly_level&result=assembly&includeEstimates=true&taxonomy=ncbi&size=50#Bioproject%3DPRJNA730822%20AND%20assembly_level)

:::grid{container direction="row" spacing="1" class="padded"}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::


## Contiguity assessment of HPRC Assemblies


:::grid{container direction="row" spacing="1" size=12}

```report
report: "scatter"
result: "assembly"
x: "assembly_type and contig_n50 AND bioproject=PRJNA730822"
xField: "contig_n50"
y: "assembly_type and scaffold_n50 AND bioproject=PRJNA730822"
cat: assembly_type
includeEstimates: false
xOpts: "100000,100000000,11,log10"
yOpts: "100000,100000000,11,log10"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity by assembly type"
size: 6
```

```report
report: "scatter"
result: "assembly"
x: "assembly_type and contig_n50 AND bioproject=PRJNA730822"
xField: "contig_n50"
y: "assembly_type and scaffold_n50 AND bioproject=PRJNA730822"
cat: "assembly_level=contig,scaffold,chromosome"
includeEstimates: false
xOpts: "100000,200000000,11,linear"
yOpts: "100000,200000000,11,linear"
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity by assembly level"
size: 6
```
:::

## HPRC Samples:
:::grid{container direction="row" spacing="1" size=12}

```report
report: histogram
x: location_name AND Bioproject=PRJNA730822
xField: "location_name=usa,united kingdom,finland,china,italy,nigeria,bangladesh,sierra leone,japan,kenya: webuye,spain,colombia: medellin,gambia,gambia: western division,kenya,nigeria: ibadan,peru: lima,barbados,china: beijing,china: han chinese south,china: hu nan province,china: xishuangbanna,japan: tokyo,puerto rico"
cat: sample_sex
includeEstimates: false
stacked: true
pointSize: 15
result: sample
taxonomy: ncbi
caption: click on individual bin to retrieve lists of samples per country 
size: 6
```



```report
report: histogram
x: sample_sex AND Bioproject=PRJNA730822
xField: sample_sex
cat: "location_name=usa,united kingdom,finland,china,italy,nigeria,bangladesh,sierra leone,japan,kenya: webuye,spain,colombia: medellin,gambia,gambia: western division,kenya,nigeria: ibadan,peru: lima,barbados,china: beijing,china: han chinese south,china: hu nan province,china: xishuangbanna,japan: tokyo,puerto rico"
includeEstimates: false
stacked: true
pointSize: 15
result: sample
taxonomy: ncbi
caption: click on individual bin to retrieve lists of samples per sex
size: 6
```

ToDO: Revise code to allow "country: region" as a mappable value on the reports

location_name="usa", "united kingdom", "finland", "china", "italy", "nigeria", "bangladesh", "sierra leone", "japan", "kenya: webuye", "spain", "colombia: medellin", "gambia", "gambia: western division", "kenya", "nigeria: ibadan", "peru: lima", "barbados", "china: beijing", "china: han chinese south", "china: hu nan province", "china: xishuangbanna", "japan: tokyo", "puerto rico" 

"location_name=usa, united kingdom, finland, china, italy, nigeria, bangladesh, sierra leone, japan, kenya: webuye, spain, colombia: medellin, gambia, gambia: western division, kenya, nigeria: ibadan, peru: lima, barbados, china: beijing, china: han chinese south, china: hu nan province, china: xishuangbanna, japan: tokyo, puerto rico"

:::grid{container direction="row" spacing="1" size=12}

```report
report: histogram
x: assembly_span AND bioproject=PRJNA730822
xField: assembly_span
includeEstimates: false
pointSize: 15
result: assembly
taxonomy: ncbi
size: 6
```

```report
report: histogram
x: chromosome_count AND bioproject=PRJNA730822
xField: chromosome_count
includeEstimates: false
pointSize: 15
result: assembly
taxonomy: ncbi
size: 6
```
:::

https://goat.genomehubs.org/search?query=chromosome_count%20AND%20bioproject%3DPRJNA730822&result=assembly&taxonomy=ncbi&size=100&report=histogram&cat=biosample_representative%5B2%5D%2B&mapThreshold=2000&includeEstimates=false&offset=0&fields=qv_score%2Cassigned_percent%2Cassembly_span%2Ccontig_n50%2Cscaffold_n50%2Cungapped_span%2Ccontig_l50%2Cscaffold_l50%2Ccontig_count%2Cscaffold_count%2Cchromosome_count%2Csequence_count%2Cgc_percent%2Cn_percent%2Clinked_accession%2Csource_accession%2Cmitochondrion_accession%2Cmitochondrion_scaffolds%2Cplastid_accession%2Cplastid_scaffolds%2Cmitochondrion_assembly_span%2Cmitochondrion_gc_percent%2Cplastid_assembly_span%2Cplastid_gc_percent%2Cassembly_status%2Cbiosample_representative%2Cassembly_level%2Clast_updated%2Cebp_metric_date%2Corganelle%2Csample_sex%2Cisolate%2Cassembly_type%2Crefseq_category%2Csubmitter%2Cebp_standard_date%2Cebp_standard_criteria%2Cgene_count%2Cprotein_count%2Cpseudogene_count%2Cnoncoding_gene_count%2Cbusco_completeness%2Cbtk_nohit%2Cbtk_target&names=bioproject%2Cbiosample%2Cucsc_assembly_name%2Crefseq_accession%2Cwgs_accession%2Cassembly_name%2Cassembly_alias%2Cassembly_id%2Cblobtoolkit_id%2Cgenbank_accession&pointSize=15&xField=chromosome_count#chromosome_count%20AND%20bioproject=PRJNA730822



:::grid{container direction="row" spacing="1" class="padded"}
:::

## HPRC Contribution to Human Reference Genome Sequencing

**Progress of HPRC in 2024**


**Publications:**
- [A draft human pangenome reference](https://www.nature.com/articles/s41586-023-05896-x)
- [Increased mutation rate and gene conversion within human segmental duplications](https://www.nature.com/articles/s41586-023-05895-y)
- [Recombination between heterologous human acrocentric chromosomes](https://www.nature.com/articles/s41586-023-05976-y)
- [Pangenome graph construction from genome alignment with minigraph-cactus](https://www.nature.com/articles/s41587-023-01793-w)
- [Gaps and complex structurally variant loci in phased genome assemblies](https://genome.cshlp.org/content/33/4/496.long)


[back to projects](/projects)
