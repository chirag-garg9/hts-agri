import React from 'react';
import Card from './Card';

const cardsData = [
  {
    id: 1,
    image: 'http://nif.org.in/upload/innovation_photo/9th/32364_innovation-1.jpg',
    title: 'Modified Combine Harvester',
    subtitle: 'By : Mr. Surendra Prasad',
    description: 'Around 10 years ago, Mr. Surendra  noticed that with increased farm mechanization, particularly the usage of the combine harvester, straw is left in the field, which is otherwise needed to feed the animals. The leftover is burnt before sowing the next crop, resulting in loss of nutrition in the soil. It also increases the quantity of carbon monoxide and other gases in the atmosphere. Aiming to utilize straw for useful applications, then he started working on the development of a combine harvester without seeing any combine harvester in 2004. He could develop his first machine in May 2010, which was also showcased on Doordarshan News at the A-2 channel. He modified it two times; the first successful machine was developed in 2011, using which he harvested 75 beegha.',
    link: 'https://innovation.nif.org.in/innovation/detail/modified-combine-harvester/4013',
  },
  {
    id: 2,
    image: 'http://nif.org.in/upload/innovation_photo/10th/9607Maharaj-Singh-4.jpg',
    title: 'Combi Tillage Implement',
    subtitle: 'By : Mr. Maharaj Singh Lodhi',
    description: 'Maharaj Singh noticed that a conventional tractor-mounted cultivator could not get proper depth hard soil while carrying out a tilling operation on his farm. To address this problem, in his first attempt itself, he developed an auger plough where five rotary augers were placed in place of cultivator tynes. They were powered by tractor PTO, however experiencing frequent wear and tear, he further developed a modified MB plough and Combi-tillage implement.',
    link: 'https://innovation.nif.org.in/innovation/detail/combi-tillage-implement/35535'
  },
  {
    id: 3,
    image: 'https://innovation.nif.org.in/upload/innovation/35526/TOPT-9449.jpg',
    title: 'Tractor Operated Paddy Transplanter',
    subtitle: 'By : Mr. Shyambir Singh and Mr. Ved Prakash, Palwal, Haryana',
    description: 'Mr. Shyambir Singh and Mr. Ved Prakash both they noticed that the transplantation of paddy was becoming expensive day by day due to increased labour wages and unavailability of labour during peak season. To address this, they designed and developed an engine operated paddy transplanter (2011) and later modified it to be operated by tractor PTO power.',
    link: 'https://innovation.nif.org.in/innovation/detail/tractor-operated-paddy-transplanter/35526',
  },
  {
    id: 4,
    image: 'http://nif.org.in/upload/innovation_photo/1st/e034f87ea587f0adbcbd07e5a100f209-525_340x180.jpg',
    title: 'Tamarind cultivation under dryland conditions',
    subtitle: 'By : Mr. A. I. Nadakattan',
    description: 'Innovator Mr. A. I. Nadakattan hails from Dharwad district of Karnataka. He is a mechanic, a social worker, and an environmentalist as a practitioner. Right from childhood he was very innovative minded and had an observant nature. He has many small innovations to his credit. His emphasis always has been to promote cost-effective, eco-friendly, and socially acceptable methods in agriculture. Even today, at the age of 46,  Nadakattin has still not given up his innovative spirit. Some of his popular innovations are machine to separate tamarind seeds, tamarind slicer for preparing pickle, harvesting tamarind, the bullock is drawn tiller, etc. Though all his innovations have been appreciated by politicians, researchers, and scientists to a large extent his economic condition has remained more or less the same. He has even sat on a hunger strike accompanied by his wife and two daughters but all in vain.',
    link: 'https://innovation.nif.org.in/innovation/detail/tamarind-cultivation-under-dryland-conditions/3435'
  },
  {
    id: 5,
    image: 'http://nif.org.in/upload/innovation_photo/9th/953518_innovation-1.jpg',
    title: 'Disc Harrow Seed Drill',
    subtitle: 'By : Mr. Mansaram Suthar and Malaram Suthar',
    description: 'While using cultivator based seed drill (shovel type furrow opener), seeds get stuck or are placed incorrectly due to the presence of weeds. In 2013, they came up with seed cum fertilizer drill with a single disc. They then developed disc plough and disc harrow based seed drills and found their performance to be better than cultivator based seed drills, preferring to use disc plough based seed drill with gram and mixed cropping. ',
    link: 'https://innovation.nif.org.in/innovation/detail/disc-harrow-seed-drill/4022'
  },
  {
    id: 6,
    image: 'https://innovation.nif.org.in/upload/innovation/35530/20160605_164248-7806.jpg',
    title: 'Maize Cutter for Combine Harvester',
    subtitle: 'By : Mr. Gurtej Singh',
    description: 'Mr. Gurtej Singn has been manufacturing reel-type combine harvesters since 2000. However, he found them to be inefficient for maize harvesting due to the crop height. This led to farmers buying new header cutting type combine harvester. Mr. Gurtej then tasked himself to develop a reel-type cutting unit for maize harvesting in 2013, which could be attached to any combine harvester. He successfully developed a modified cutting unit for combine harvester.',
    link: 'https://innovation.nif.org.in/innovation/detail/maize-cutter-for-combine-harvester/35530'
  },
];

function Innovation() {
  return (
    <>
    <div>
    <h1 class="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"> INNOVATION </h1>
    </div>
    <div className='m-4'>
        <div className="flex flex-wrap justify-center gap-4 ">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          link={card.link}
        />
      ))}
        </div>
    </div>
    </>
    
  );
}

export default Innovation;
