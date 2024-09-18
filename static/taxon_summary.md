<!--
Content to display in a panel on each taxon record page.
-->

:::grid{container direction=row spacing=1 alignItems=center size=12}

# {{scientific_name}}

::recordlabel{result=taxon,assembly condition="attributes.phylum_first" label="1st in phylum" color=1/6 description="first {{result}} in its phylum to meet the EPB assembly standard" icon="prize"}

::recordlabel{result=taxon,assembly condition="attributes.class_first" label="1st in class" color=2/6 description="first {{result}} in its class to meet the EPB assembly standard" icon="prize"}

::recordlabel{result=taxon,assembly condition="attributes.order_first" label="1st in order" color=3/6 description="first {{result}} in its order to meet the EPB assembly standard" icon="prize"}

::recordlabel{result=taxon,assembly condition="attributes.family_first" label="1st in family" color=4/6 description="first {{result}} in its family to meet the EPB assembly standard" icon="prize"}

::recordlabel{result=taxon,assembly condition="attributes.genus_first" label="1st in genus" color=5/6 description="first {{result}} in its genus to meet the EPB assembly standard" icon="prize"}

::recordlabel{result=taxon,assembly condition="attributes.ebp_standard_date" label="EBP standard" color=#FFD700 description="assembly meets the EBP standard criteria" icon="quality"}

::recordlabel{result=taxon,assembly condition="attributes.gene_count&&attributes.ebp_standard_date" label="annotated" color=#C0C0C0 description="Assembly has gene annotations" icon="more"}

::recordlabel{result=taxon,assembly condition="attributes.sample_collected&&attributes.ebp_standard_date!" label="collected" color=#0033FF description="At least one project has sample collected status" icon="catch"}

:::

:::grid{container direction=row spacing=1 alignItems=center size=12}

::static{plot=snail.png,cumulative.png,blob.png size=3}

::grid{size=1}

::include{pageId=taxon_summary/{{groups}}_counts.md taxonId={{recordId|taxon_id}} size=4 .paragraph}

::include{pageId=taxon_summary/links.md taxonId={{recordId|taxon_id}} size=4 .paragraph}
:::
