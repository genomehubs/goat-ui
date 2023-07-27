<!--
Unused content
-->

### Tree display options

Tree display includes ring and rectangular options and attribute values can be used to decorate the tree, as shown here for Passerine birds with publicly available genome assemblies.

:::grid{container direction=row spacing="1"}

::report{report="tree" x="tax_tree(Passeriformes) AND tax_depth(3) AND assembly_span" y="assembly_date>=2021" treeStyle="ring" taxonomy="ncbi" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" ratio=1 disableModal="true" caption="Passerine birds (Passeriformes) with available genomes, highlighting assemblies generated from 2021 onwards" item xs=4}

::report{report="tree" x="tax_tree(Passeriformes) AND tax_depth(3) AND assembly_span" y="assembly_date>=2021" treeStyle="rect" taxonomy="ncbi" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" collapseMonotypic ratio=2 disableModal="true" caption="Passerine birds (Passeriformes) with available genomes, highlighting assemblies generated from 2021 onwards" item xs=8}

:::
