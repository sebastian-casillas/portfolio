<template>
    <div class='fill-container'>
        <svg id="canvas" class="programming_canvas" :viewBox="viewBox">
            <g id="node_group" ref="node_group">

                <g v-for="node of test_data.nodes" :key="node.id" :id="node.id">
                    <circle cx="0" cy="-5" :r="node.radius" class="circle_background" :fill="tech_groups[node.group].color" >

                    </circle>

                    <text fill="white" class="node_style">{{node.id}}</text>

                </g>


                
            </g>

            <!-- <g id="link_group" ref="node_group">
                <line v-for="node of test_data.nodes" :key="node.id" :id="node.id" x1="0" y1="80" x2="100" y2="20" stroke="black" />
            </g> -->
        </svg>
    </div>
</template>

<script>

import * as d3 from 'd3'

export default {
    name: 'TechGraph',
    components: {

    },
    props: {
        graph_data: {
            type: Object,
            default: _ => {}
        },
        canvas_height: {
            type: Number,
            default: 500
        },
        canvas_width: {
            type: Number,
            default: 650
        },
    },
    data: () => ({
        simulation: null,
        svg: null,

        nodeGroup_svgElement: null,
        linkGroup_svgElement: null,

        nodeGroup: null,
        linkGroup: null,

        tech_groups:{
            web: { color: '#ad7e5f', title: 'Web' },
            unity: { color: '#5d748c', title: 'Unity' },
            comp_science: { color: '#3b4959', title: 'Computer Science' },
            data_science: { color: '#3b4959', title: 'Data Science' },
        },

        nodes: {},
        links: null,

        test_data: {
            nodes: [
                {id: 'JavaScript', group: 'web', radius: 50},
                {id: 'HTML', group: 'web', radius: 30},
                {id: 'CSS', group: 'web', radius: 30},
                {id: 'PHP', group: 'web', radius: 40},
                {id: 'C#', group: 'unity', radius: 50},
                {id: 'C/C++', group: 'comp_science', radius: 40},
                {id: 'SQL', group: 'comp_science', radius: 30},
                {id: 'Java', group: 'comp_science', radius: 30},
                {id: 'Python', group: 'data_science', radius: 50},
            ],
            links: [
                {
                source: 'JavaScript',
                target: 'HTML',
                value: 10
                },
                {
                source: 'JavaScript',
                target: 'CSS',
                value: 8
                }
            ]
        },




    }),


    mounted() {
        this.svg = d3.select('#canvas');

        this.nodeGroup_svgElement = this.svg.select('#node_group')
        this.linkGroup_svgElement = this.svg.select('#link_group')


        this.simulation = d3.forceSimulation(this.test_data.nodes)
                            .force('charge', d3.forceManyBody().strength(100))
                            .force('collision', d3.forceCollide().radius(function(d) {  return d.radius }))
                            .force( 'link', d3.forceLink(this.test_data.linksdata_links).distance(10).strength(50))
                            .force('center',  d3.forceCenter())
                            .on('tick', this.ticked);

        this.nodeGroup = this.nodeGroup_svgElement
                             .selectAll('g')
                             .data(this.test_data.nodes)
                             .join('g')
                                .call(this.drag(this.simulation));


    },

    methods: {

        drag: function(simulation) {    
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;

            }
            
            function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
            }
            
            function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
            }
            
            return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
        },
                    
        ticked: function(){
            // link
            //     .attr('x1', d => d.source.x)
            //     .attr('y1', d => d.source.y)
            //     .attr('x2', d => d.target.x)
            //     .attr('y2', d => d.target.y);

            this.nodeGroup.attr('transform', d=> 'translate(' + d.x +',' +d.y +')');

        }





    },

    computed:{
        viewBox: function(){
            return `-${this.canvas_width/2} -${this.canvas_height/2} ${this.canvas_width} ${this.canvas_height}` 
        }
    }
}

</script>

<style>
.programming_canvas{
    width: 100%;
    max-width: 100%; 
    height: auto; 
    height: intrinsic;

}

.node_style{
    text-anchor: middle;
    font-size: .9rem;
}

.circle_background{
    filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
}
</style>