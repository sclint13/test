let counter = 0;

const works = [
    {
        workName: 'Landing Page',
        url: 'examples/landing',
        pic: 'img/landingMobileSS.png'
    },
    {
        workName: 'Database',
        url: 'examples/database',
        pic: 'NULL'
    }
    // {
    //     workName: 'Example 2',
    //     url: 'img/self.jpg'
    // },
];

let imageRoll;

if (width < 560){
    $('#sliderCont').html(`<img src='${works[counter].pic}' alt='${works[counter].workName}'></img>`);
    $('#slideLink').html(`<a target='_blank' href='${works[counter].url}'><button>View Page in New Tab</button></a>`);
    
    $('#nextBtn').on ('click', function() {
        counter < works.length - 1 ? counter++ : counter=0;
        $('#sliderCont').html(`<img src='${works[counter].pic}' alt='${works[counter].workName}'></img>`);
    });
    
    $('#prevBtn').on ('click', function() {
        counter === 0 ? counter = 1 : counter--;
        $('#sliderCont').html(`<img src='${works[counter].pic}' alt='${works[counter].workName}'></img>`);
    })
} else {
    $('#sliderCont').html(`<iframe src='${works[counter].url}' title='${works[counter].workName}'></iframe>`);
    $('#slideLink').html(`<a target='_blank' href='${works[counter].url}'><button>View Page in New Tab</button></a>`);
    
    $('#nextBtn').on ('click', function() {
        counter < works.length - 1 ? counter++ : counter=0;
        $('#sliderCont').html(`<iframe src='${works[counter].url}' title='${works[counter].workName}'></iframe>`);
    });
    
    $('#prevBtn').on ('click', function() {
        counter === 0 ? counter = 1 : counter--;
        $('#sliderCont').html(`<iframe src='${works[counter].url}' title='${works[counter].workName}'></iframe>`);
    });
}
