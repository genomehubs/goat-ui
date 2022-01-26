# Help

## How to use GoaT

The easiest way to start exploring goat is to select your favorite taxon and play with the icons displayed under GoaTs search box.

You can use the "result columns" icon below the search box to select the metadata you would like to display for your search.

The drop down terms in the "query builder" icon can be also used to refine your search terms in your query.
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Example Steps

- [1] In the search box above try typing and selecting: Chiroptera

- [2] Click on the "result columns" icon

- [3] Deselect all boxes except "assembly"

- [4] In the "assembly"dropdown, select only assembly_span

- [5] Click the "Update" icon

- [6] Turn the "include descendants" switch on
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Illustrated GoaT Search Tutorial

[Illustrated User Guide](https://docs.google.com/document/d/10ayIwVQ7kwEvStsBiG8dzE9xJDt53u8e0TF806CC344/edit?usp=sharing)

:::grid{container direction="row" spacing="1" class="padded"}
:::
## Color-coding System

The values in this GenomeHub are shown alongside a color-coding, bar-filling system as follows:

::grid[![GoaT](/static/images/bars.png)]{item xs=4}


The color- and filling- bar system indicates which results are based on :span[direct]{.direct} measurements (full bars), which are inferred from :span[descendant]{.descendant} taxa (indicated by bars with an intermediate fill level), and which are inferred from sibling taxa via a shared :span[ancestor]{.ancestor} (indicated by mostly empty bars). For this last category, tooltips provide details of the common ancestral rank to provide an indication of how reliable the estimate may be, e.g. :tooltip[:span[ancestor]{.ancestor}]{title="family" arrow placement="right"}.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## GoaT Reports
GoaT reports from search results can be edited following three main steps:
- [1] click on the report 
- [2] use the edit (pencil) icon to change attributes and values
- [3] click on the update icon to implement the changes

- Practice using this [example report from landing page](https://goat.genomehubs.org/report?report=xInY&x=assembly_level%3Dchromosome&y=assembly_span&rank=species&includeEstimates=true&excludeAncestral%5B0%5D=assembly_span&excludeMissing%5B0%5D=assembly_span&caption=Contribution%20of%20chromosome-level%20assemblies%20to%20the%20total%20of%20species%20with%20available%20assemblies%20on%20INSDC&taxonomy=ncbi&result=taxon) or choose a report to practice [here](https://goat.genomehubs.org).

:::grid{container direction="row" spacing="1" class="padded"}
:::
## List of Atributes on GoaT
Attributes can be used as search terms alongside taxa on the search box

Ex: assembly_span AND tax_name(chiroptera)

Select **result columns** to display (**mandatory step!**)
:::grid{container direction="row" spacing="1" class="padded"}
:::

### assembly

- assembly_level
- assembly_span
- bioproject
- biosample
- contig_n50
- assembly_date
- scaffold_n50
- gene_count
- sample_sex
- ebp_metric_date
- busco_completeness
- busco_lineage
- gc_percent
- n_percent
- nohit
- target

### mitochondrion_assembly
- mitochondrion_assembly_span
- mitochondrion_gc_percent

### plastid_assembly
- plastid_assembly_span
- plastid_gc_percent

### karyotype
- chromosome_number
- haploid_number
- sex_determination
- ploidy

### genome_size
- genome_size
- c_value_method
- c_value_cell_type
- c_value

### uk_legislation
- marhabreg-2017
- habreg_2017
- echabs92
- isb_wildlife_act_1976
- waca_1981
- protection_of_badgers_act_1992

### status_lists
- sequencing_status
- sample_collected
- sample_acquired
- in_progress
- insdc_submitted
- insdc_open
- published
- sample_collected_by

### regional_lists
- country_list

### target_lists
- other_priority
- family_representative
- long_list

### ranks
- subspecies
- species
- genus
- family
- order
- class
- phylum
- kingdom
- superkingdom

### names
- tol_id
- common_name
- xref
- synonym

