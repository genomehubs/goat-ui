<!--
Content to display in a panel on each assembly record page.
-->

:::grid{container direction=row spacing=1 alignItems=center size=12}
::static{plot=snail.png,cumulative.png,blob.png size=3}

::grid{size=1}

::include{pageId=assembly_summary/values.md taxonId={{recordId|taxon_id}} size=4 .paragraph}

::include{pageId=taxon_summary/links.md taxonId={{recordId|taxon_id}} size=4 .paragraph}
:::
