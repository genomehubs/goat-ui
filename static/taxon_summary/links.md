::phylopic{}

::recordlink{result=taxon rank=species url="https://portal.darwintreeoflife.org/data/root/details/{scientific_name}" condition="attributes.bioproject=PRJEB40665" label="Darwin portal" color=#8fbc45 description="Click to view in the Darwin Tree of Life Data Portal"}

::recordlink{result=assembly url="https://portal.darwintreeoflife.org/data/organism/details/{attributes.biosample.value}" condition="attributes.bioproject=PRJEB40665" label="Darwin portal" color=#8fbc45 description="Click to view in the Darwin Tree of Life Data Portal"}

::recordlink{result=taxon url="https://blobtoolkit.genomehubs.org/view/{taxon_id}" condition="attributes.btk_target" label="BlobToolKit" color=#9c528b description="Click to view in the BlobToolKit Viewer" icon="/btk-icon.png"}

::recordlink{result=assembly,sample url="https://blobtoolkit.genomehubs.org/view/{assemblyId}" condition="attributes.btk_target" label="BlobToolKit" color=#9c528b description="Click to view in the BlobToolKit Viewer" icon="/btk-icon.png"}

::recordlink{result=taxon,assembly,sample url="https://www.ebi.ac.uk/ena/browser/view/{assemblyId}" condition="assemblyId" label="ENA" color=#70bdbd description="Click to view assembly {assemblyId} in ENA"}

::recordlink{result=taxon,assembly,sample url="https://www.ncbi.nlm.nih.gov/assembly/{assemblyId}" condition="assemblyId" label="NCBI" color=#20558a description="Click to view assembly {assemblyId} in NCBI"}

::recordlink{result=taxon,assembly,feature url="https://genome.ucsc.edu/h/{assembly.identifiers[class:ucsc_assembly_name].identifier}" condition="assembly.identifiers[class:ucsc_assembly_name]" label="UCSC" color=#D4A017 description="Click to view assembly {assemblyId} in the UCSC Genome Browser"}

::recordlink{result=assembly,sample url="https://boat.genomehubs.org/record?recordId={assembly.identifiers[class:boat_id].identifier}&result=assembly" condition="assembly.identifiers[class:boat_id]" label="BoaT" color=#31323f description="Click to view in BoaT" icon="/boat-icon.png"}

<!-- ensembl metazoa -->
::recordlink{result=assembly,feature url="https://metazoa.ensembl.org/{assembly.identifiers[class:ensembl_metazoa_id].identifier}/Info/Index" condition="assembly.identifiers[class:ensembl_metazoa_id]" label="Ensembl Metazoa" color=#015365 description="Click to view assembly {assemblyId} in the Ensembl Metazoa Genome Browser"}

<!-- ensembl rapid -->
::recordlink{result=assembly,feature url="https://rapid.ensembl.org/{assembly.identifiers[class:ensembl_rapid_id].identifier}/Info/Index" condition="assembly.identifiers[class:ensembl_rapid_id]" label="Ensembl Rapid" color=#2378a9 description="Click to view assembly {assemblyId} in the Ensembl Rapid Genome Browser"}
