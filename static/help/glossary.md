<!--
Content to display at /help/glossary
-->

::breadcrumbs[Glossary of attributes used in GoaT]


**GoaT attributes** are grouped in **display groups** that correspond to higher-level metadata categories.

- **Attribute names** are the terms used to query GoaT;
- **Attribute description** is a longer version of the attribute name. Hover over the attribute name to see its longer description;
- **Attribute values** are the possible values for an attribute;
- **Attribute type** is the type of the attribute value (e.g. keyword = string, float,integer = number, date, etc.);
- **Summary function** describes how the attribute values are aggregated and propagated to generate the summary values observed on GoaT tables. 
    - **Primary** are values set to be displayed by default, bypassing a summary metric (e.g. the 'assembly_type' values from RefSeq assemblies will be displayed as summary, regardless of completeness). 
    - For numeric values, the median is often used for continuous data (e.g. genome size), and the mode is used for a few discrete data types (e.g. chromosome number). 
    - Arrow directions represent the direction summaries are set to propagate up and down the taxonomy tree;
- **Described values** show how many values are possible for an attribute.


:::grid{container direction="row" spacing="1" class="padded"}
::include{pageId=attribute_glossary.md size=12 .inline}


## More on GoaT indexes:
- **Taxon** index contains information from all sources aggregated at the taxon level (sequencing_status, assembly_level, genome_size, country_list, etc.);
- **Assembly** index contains information for individual assemblies (e.g. assembly_level, assembly_span, BUSCO completeness, etc.);
- **Sample** index contains information about samples used in generating assemblies (e.g. sample_location, sample_sex, etc.).