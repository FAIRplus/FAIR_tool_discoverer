import PublicationsCol from './PublicationsCol.vue';

export default {
    title: 'Table Components/Columns/Publications',
    component: PublicationsCol,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { PublicationsCol },
    template: '<PublicationsCol :item="item" :idx="idx"/>'
  });


  export const OnePublication = Template.bind({});

  OnePublication.args = {
    idx :1,
    item : {
      "_id": "62446c1831de5b3c1926c38c",
    "@id": null,
    "authors": ["İGBAM"],
    "bioschemas": false,
    "description": ["Homozygous stretch identifier from next-generation sequencing data.", "In consanguineous families, as a result of inheriting the same genomic segments through both parents, the individuals have stretches of their genomes that are homozygous. This situation leads to the prevalence of recessive diseases among the members of these families. Homozygosity mapping is based on this observation and several recessive disease genes have been discovered with the help of this technique in consanguineous families. The researchers typically use SNP arrays to determine the homozygous regions and then search for the disease gene by sequencing the genes within this candidate disease loci. Recently, the advent of next generation sequencing enables the concurrent identification of homozygous regions and the detection of mutations relevant for diagnosis, using data from a single sequencing experiment. In this respect, we have developed a novel tool that identifies homozygous regions using deep sequence data. Using *.vcf files as an input file, our program identifies the majo"],
    "documentation": [],
    "download": ["https://sourceforge.net/projects/homsi"],
    "https": false,
    "input": [],
    "inst_instr": false,
    "license": [
        ["Academic Free License (AFL)"]
    ],
    "links": ["http://www.igbam.bilgem.tubitak.gov.tr/softwares/HomSI/", "http://www.igbam.bilgem.tubitak.gov.tr/softwares/HomSI/index.html"],
    "name": "homsi",
    "operational": false,
    "os": ["Linux", "Windows", "Mac"],
    "output": [],
    "repository": ["https://sourceforge.net/projects/homsi"],
    "semantics": {
        "inputs": [],
        "outputs": [],
        "topics": ["http://edamontology.org/topic_0080", "http://edamontology.org/topic_0622", "http://edamontology.org/topic_3299"],
        "operations": ["http://edamontology.org/operation_2403"]
    },
    "source": ["opeb_metrics", "biotools", "sourceforge"],
    "src": [],
    "ssl": true,
    "termsUse": false,
    "test": false,
    "type": "app",
    "version": ["unknown"],
    "edam_topics": [{
        "uri": "http://edamontology.org/topic_0080",
        "label": "Sequence analysis"
    }, {
        "uri": "http://edamontology.org/topic_0622",
        "label": "Genomics"
    }, {
        "uri": "http://edamontology.org/topic_3299",
        "label": "Evolutionary biology"
    }],
    "edam_operations": [{
        "uri": "http://edamontology.org/operation_2403",
        "label": "Sequence analysis"
    }],
    "matches": ["identifier"],
    "citations": [{
        "cit_count": 19,
        "citations": [{
            "count": 4,
            "year": "2015"
        }, {
            "count": 1,
            "year": "2016"
        }, {
            "count": 6,
            "year": "2017"
        }, {
            "count": 4,
            "year": "2019"
        }, {
            "count": 1,
            "year": "2020"
        }, {
            "count": 3,
            "year": "2021"
        }],
        "doi": "10.1093/bioinformatics/btt686",
        "pmid": "24307702",
        "ref_count": 13,
        "refs": [{
            "count": 1,
            "year": "1987"
        }, {
            "count": 1,
            "year": "2006"
        }, {
            "count": 2,
            "year": "2009"
        }, {
            "count": 2,
            "year": "2010"
        }, {
            "count": 2,
            "year": "2011"
        }, {
            "count": 3,
            "year": "2012"
        }, {
            "count": 2,
            "year": "2013"
        }],
        "title": "HomSI: a homozygous stretch identifier from next-generation sequencing data.",
        "year": 2014,
        "trace": {
            "x": ["2015", "2016", "2017", "2019", "2020", "2021"],
            "y": [4, 1, 6, 4, 1, 3]
        }
    }],
    "citations_other": [],
    "sources_labels": {
        "biotools": "https://bio.tools/homsi",
        "sourceforge": "",
        "other": "http://www.igbam.bilgem.tubitak.gov.tr/softwares/HomSI/"
    },
    "raw_score": 1,
    "score": 1
    }
    
  };
