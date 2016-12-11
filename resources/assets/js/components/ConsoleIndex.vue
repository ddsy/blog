<template>
    <div ref="content">
        <svg ref="tree" height="2400"></svg>
    </div>
</template>

<style lang="sass">
    .node circle {
        fill: blue;
    }

    .node text {
        font: 10px sans-serif;
    }

    .node--internal circle {
        fill: red;
    }

    .node--internal text {
        text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
    }

    .link {
        fill: none;
        stroke: #555;
        stroke-opacity: 0.4;
        stroke-width: 1.5px;
    }
</style>

<script>
    import * as d3 from "d3";
    export default {
        mounted() {
            _.delay(this.drawtree, 100);
        },
        methods: {
            drawtree() {
                const tree = this.$refs.tree;
                console.log(tree);
                let svg = d3.select(this.$refs.tree);
                svg.attr('width', this.$refs.content.offsetWidth-20);
                let width = +svg.attr("width");
                let height = +svg.attr("height");
                let g = svg.append("g").attr("transform", "translate(40,0)");

                let cluster = d3.cluster()
                    .size([height, width - 160]);

                let stratify = d3.stratify()
                    .parentId(function (d) {
                        return d.id.substring(0, d.id.lastIndexOf("."));
                    });

                d3.csv("/json/flare.csv", function (error, data) {
                    if (error) throw error;

                    let root = stratify(data)
                        .sort(function (a, b) {
                            return (a.height - b.height) || a.id.localeCompare(b.id);
                        });

                    cluster(root);

                    let link = g.selectAll(".link")
                        .data(root.descendants().slice(1))
                        .enter().append("path")
                        .attr("class", "link")
                        .attr("d", function (d) {
                            return "M" + d.y + "," + d.x
                                + "C" + (d.parent.y + 100) + "," + d.x
                                + " " + (d.parent.y + 100) + "," + d.parent.x
                                + " " + d.parent.y + "," + d.parent.x;
                        });

                    let node = g.selectAll(".node")
                        .data(root.descendants())
                        .enter().append("g")
                        .attr("class", function (d) {
                            return "node" + (d.children ? " node--internal" : " node--leaf");
                        })
                        .attr("transform", function (d) {
                            return "translate(" + d.y + "," + d.x + ")";
                        });

                    node.append("circle")
                        .transition().duration(1000)
                        .attr("r", 4);

                    node.append("text")
                        .transition().duration(1000)
                        .attr("dy", 3)
                        .attr("x", function (d) {
                            return d.children ? -8 : 8;
                        })
                        .style("text-anchor", function (d) {
                            return d.children ? "end" : "start";
                        })
                        .text(function (d) {
                            return d.id.substring(d.id.lastIndexOf(".") + 1);
                        });
                });
            }
        }
    }
</script>
