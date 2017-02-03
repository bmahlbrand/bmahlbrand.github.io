import * as d3 from 'd3';
import 'd3-cloud';

function ResearchController($scope) {

    $scope.data = {};

    // $scope.init = () => {
    //     const fill = d3.scale.category20();
    //     const data = [{ word: 'Hello', weight: 20 }, {word: 'World', weight: 10 }, { word: 'Normally', weight: 25 }, { word: 'You', weight: 15 }, { word: 'Want', weight: 30 }, { word: 'More', weight: 12 }, { word: 'Words', weight: 8 }, { word: 'But', weight: 18 }, { word: 'Who', weight: 22 }, { word: 'Cares', weight: 27}];

    //     function randomWord() {
    //         let text = '';
    //         const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    //         for (let i = 0;i < 5;i++) {
    //             text += possible.charAt(Math.floor(Math.random() * possible.length));
    //         }

    //         return text;
    //     }

    //     function randomWeight() {
    //         const r = Math.round(Math.random() * 100);

    //         return r;
    //     }

    //     function draw(words) {
    //         d3.select('body').append('svg')
    //         .attr('width', 300)
    //         .attr('height', 300)
    //         .append('g')
    //         .attr('transform', 'translate(150,150)')
    //         .selectAll('text')
    //         .data(words)
    //         .enter().append('text')
    //         .style('font-size', (d) => { return `d.size + px`; })
    //         .style('font-family', 'Impact')
    //         .style('fill', (d, i) => { return fill(i); })
    //         .attr('text-anchor', 'middle')
    //         .attr('transform', (d) => {
    //             return `translate( [d.x, d.y] )rotate( d.rotate )`;
    //         })
    //         .text((d) => { return d.text; });
    //     }

    //     function drawUpdate(words) {
    //         d3.layout.cloud().size([500, 500])
    //             .words(words)
    //             .padding(5)
    //             .rotate(() => { return ~~(Math.random() * 2) * 90; })
    //             .font('Impact')
    //             .fontSize((d) => { return d.size; })
    //             .start();


    //         d3.select('svg')
    //             .selectAll('g')
    //             .attr('transform', 'translate(150, 150)')
    //             .selectAll('text')
    //             .data(words).enter().append('text')
    //             .style('font-size', (d) => { return `d.size px`; })
    //             .style('font-family', 'Impact')
    //             .style('fill', (d, i) => { return fill(i); })
    //             .attr('transform', (d) => {
    //                 return `translate( [d.x, d.y] )rotate( d.rotate )`;
    //             })
    //             .text((d) => { return d.text; });
    //     }

    //     d3.layout.cloud().size([500, 500])
    //         .words(data.map((d) => {
    //             return {text: d.word, size: d.weight};
    //         }))
    //         .padding(5)
    //         .rotate(() => { return ~~(Math.random() * 2) * 90; })
    //         .font('Impact')
    //         .fontSize((d) => { return d.size; })
    //         .on('end', draw)
    //         .start();

    //     setInterval(() => {
    //         const dNew = data;

    //         dNew.push({word: randomWord(), weight: randomWeight()});

    //         drawUpdate(dNew.map((d) => {
    //             return { text: d.word, size: d.weight };
    //         }));
    //     }, 1500);
    // };

    // $scope.init();

}

export default ['$scope', ResearchController];
