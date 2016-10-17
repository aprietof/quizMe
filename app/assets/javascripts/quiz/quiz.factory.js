(function() {

    'use strict'

    function QuizFactory() {
        return {
            quizQuestions: quizQuestions,
            finalize: false,
            numQuestionsAnswered: 0,
            activeQuestionIndex: 0,
            resetVariables: resetVariables,
            answeredQuestions: []
        }

        function quizQuestions() {
            return [{
                type: "text",
                text: "How much can a loggerhead weigh?",
                possibilities: [{
                    answer: "Up to 20kg"
                }, {
                    answer: "Up to 115kg"
                }, {
                    answer: "Up to 220kg"
                }, {
                    answer: "Up to 500kg"
                }],
                answered: null,
                correct: false,
                answer: 1
            }, {
                type: "text",
                text: "What is the typical lifespan of a Green Sea Turtle?",
                possibilities: [{
                    answer: "150 years"
                }, {
                    answer: "10 years"
                }, {
                    answer: "80 years"
                }, {
                    answer: "40 years"
                }],
                answered: null,
                correct: false,
                answer: 2
            }, {
                type: "image",
                text: "Which of these is the Alligator Snapping Turtle?",
                possibilities: [{
                    answer: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
                }, {
                    answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                }, {
                    answer: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
                }, {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                }],
                answered: null,
                correct: false,
                answer: 3
            }, {
                type: "image",
                text: "Which of these is the Green Turtle?",
                possibilities: [{
                    answer: "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg"
                }, {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                }, {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                }, {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                }],
                answered: null,
                correct: false,
                answer: 0
            }, {
                type: "text",
                text: "Where does the Kemp's Ridley Sea Turtle live?'",
                possibilities: [{
                    answer: "Tropical waters all around the world"
                }, {
                    answer: "Eastern Australia"
                }, {
                    answer: "Coastal North Atlantic"
                }, {
                    answer: "South pacific islands"
                }],
                answered: null,
                correct: false,
                answer: 2
            }, {
                type: "text",
                text: "What is the most common turtle in US waters?",
                possibilities: [{
                    answer: "Loggerhead turtle"
                }, {
                    answer: "Leatherback turtle"
                }, {
                    answer: "Hawksbill Turtle"
                }, {
                    answer: "Alligator Snapping Turtle"
                }],
                answered: null,
                correct: false,
                answer: 0
            }, {
                type: "text",
                text: "What is the largest sea turtle on earth?",
                possibilities: [{
                    answer: "Eastern Snake Necked Turtle"
                }, {
                    answer: "Olive Ridley Sea Turtle"
                }, {
                    answer: "Kemp's Ridley Sea Turtle'"
                }, {
                    answer: "Leatherback"
                }],
                answered: null,
                correct: false,
                answer: 3
            }, {
                type: "image",
                text: "Which of these is the Olive Ridley Turtle?",
                possibilities: [{
                    answer: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg"
                }, {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                }, {
                    answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                }, {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                }],
                answered: null,
                correct: false,
                answer: 2
            }, {
                type: "text",
                text: "How Heavy can a leatherback turtle be?",
                possibilities: [{
                    answer: "900kg"
                }, {
                    answer: "40kg"
                }, {
                    answer: "110kg"
                }, {
                    answer: "300kg"
                }],
                answered: null,
                correct: false,
                answer: 0
            }, {
                type: "text",
                text: "Which of these turtles are herbivores?",
                possibilities: [{
                    answer: "Loggerhead Turtle"
                }, {
                    answer: "Hawksbill Turtle"
                }, {
                    answer: "Leatherback Turtle"
                }, {
                    answer: "Green Turtle"
                }],
                answered: null,
                correct: false,
                answer: 3
            }]
        }

        function resetVariables() {
            QuizFactory.finalize = false
            QuizFactory.numQuestionsAnswered = 0
            QuizFactory.activeQuestionIndex = 0
        }
    }

    angular
        .module('app')
        .factory('QuizFactory', QuizFactory)

}());
