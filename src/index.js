import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const people = [
        {
          "id": 1,
          "avatar": "https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-500w.jpeg",
          "first_name": "Blaire",
          "last_name": "Chestle",
          "age": 27,
          "email_work": "bchestle0@icq.com",
          "email_home": "bchestle0@examiner.com",
          "email_other": "",
          "phone_work": "912-876-2007",
          "phone_home": "",
          "phone_mobile": "909-218-9022",
          "phone_other": "256-651-0262",
          "address_work": "1 Raven Place",
          "address_home": "3 Porter Avenue",
          "address_other": "",
          "city": "Savannah",
          "state": "GA",
          "zip": "31422"
        }, {
          "id": 2,
          "avatar": "https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg",
          "first_name": "Ellie",
          "last_name": "Kobelt",
          "age": 23,
          "email_work": "ekobelt1@ibm.com",
          "email_home": "ekobelt1@altervista.org",
          "email_other": "",
          "phone_work": "951-492-0968",
          "phone_home": "",
          "phone_mobile": "605-651-5090",
          "phone_other": "",
          "address_work": "435 Huxley Plaza",
          "address_home": "3 Wayridge Circle",
          "address_other": "",
          "city": "Riverside",
          "state": "CA",
          "zip": "92513"
        }, {
          "id": 3,
          "avatar": "https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-500w.jpeg",
          "first_name": "Jesse",
          "last_name": "Ratcliffe",
          "age": 29,
          "email_work": "jratcliffe2@naver.com",
          "email_home": "jratcliffe2@goo.gl",
          "email_other": "jratcliffe2@ed.gov",
          "phone_work": "661-121-4568",
          "phone_home": "",
          "phone_mobile": "502-395-8675",
          "phone_other": "323-346-4063",
          "address_work": "90 Montana Court",
          "address_home": "9165 Merrick Terrace",
          "address_other": "5807 Pierstorff Alley",
          "city": "Bakersfield",
          "state": "CA",
          "zip": "93305"
        }, {
          "id": 4,
          "avatar": "https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-500w.jpeg",
          "first_name": "Shermie",
          "last_name": "Dowley",
          "age": 32,
          "email_work": "sdowley3@topsy.com",
          "email_home": "sdowley3@harvard.edu",
          "email_other": "sdowley3@liveinternet.ru",
          "phone_work": "337-198-6920",
          "phone_home": "",
          "phone_mobile": "917-884-2052",
          "phone_other": "",
          "address_work": "54306 Myrtle Street",
          "address_home": "900 Autumn Leaf Terrace",
          "address_other": "",
          "city": "Lafayette",
          "state": "LA",
          "zip": "70593"
        }, {
          "id": 5,
          "avatar": "https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-500w.jpeg",
          "first_name": "Jack",
          "last_name": "Ethelston",
          "age": 35,
          "email_work": "jethelston4@miitbeian.gov.cn",
          "email_home": "jethelston4@go.com",
          "email_other": "jethelston4@cloudflare.com",
          "phone_work": "503-142-0119",
          "phone_home": "831-811-7223",
          "phone_mobile": "208-810-3497",
          "phone_other": "",
          "address_work": "9286 Oakridge Street",
          "address_home": "19744 Sommers Trail",
          "address_other": "165 Sachs Terrace",
          "city": "Portland",
          "state": "OR",
          "zip": "97221"
        }, {
          "id": 6,
          "avatar": "https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png",
          "first_name": "Rena",
          "last_name": "Mompesson",
          "age": 30,
          "email_work": "rmompesson5@soundcloud.com",
          "email_home": "",
          "email_other": "",
          "phone_work": "719-244-7026",
          "phone_home": "",
          "phone_mobile": "630-478-5949",
          "phone_other": "202-491-4508",
          "address_work": "7 Green Ridge Plaza",
          "address_home": "770 Messerschmidt Avenue",
          "address_other": "51 Anniversary Parkway",
          "city": "Colorado Springs",
          "state": "CO",
          "zip": "80951"
        }, {
          "id": 7,
          "avatar": "https://tinyfac.es/data/avatars/B3CF5288-34B0-4A5E-9877-5965522529D6-500w.jpeg",
          "first_name": "Tailor",
          "last_name": "Yele",
          "age": 37,
          "email_work": "tyele6@w3.org",
          "email_home": "",
          "email_other": "",
          "phone_work": "816-404-8973",
          "phone_home": "",
          "phone_mobile": "571-191-1861",
          "phone_other": "",
          "address_work": "177 Vera Park",
          "address_home": "1642 Oak Lane",
          "address_other": "8589 Haas Hill",
          "city": "Kansas City",
          "state": "MO",
          "zip": "64179"
        }, {
          "id": 8,
          "avatar": "https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-500w.jpeg",
          "first_name": "Joyan",
          "last_name": "Trahmel",
          "age": 43,
          "email_work": "jtrahmel7@time.com",
          "email_home": "jtrahmel7@imdb.com",
          "email_other": "",
          "phone_work": "859-712-6024",
          "phone_home": "",
          "phone_mobile": "949-261-5013",
          "phone_other": "",
          "address_work": "296 Vernon Point",
          "address_home": "632 Magdeline Place",
          "address_other": "7 Westridge Plaza",
          "city": "Lexington",
          "state": "KY",
          "zip": "40581"
        }, {
          "id": 9,
          "avatar": "https://tinyfac.es/data/avatars/7E570445-25F0-4276-8E8F-084ABA2C8FB8-500w.jpeg",
          "first_name": "Dwight",
          "last_name": "Waterworth",
          "age": 37,
          "email_work": "dwaterworth8@51.la",
          "email_home": "dwaterworth8@eventbrite.com",
          "email_other": "",
          "phone_work": "901-419-4529",
          "phone_home": "",
          "phone_mobile": "",
          "phone_other": "323-998-9811",
          "address_work": "96716 Talmadge Crossing",
          "address_home": "83 Autumn Leaf Way",
          "address_other": "2433 Hermina Point",
          "city": "Memphis",
          "state": "TN",
          "zip": "38181"
        }, {
          "id": 10,
          "avatar": "https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png",
          "first_name": "Jecho",
          "last_name": "Fison",
          "age": 53,
          "email_work": "jfison9@yolasite.com",
          "email_home": "jfison9@spotify.com",
          "email_other": "jfison9@hubpages.com",
          "phone_work": "941-453-4601",
          "phone_home": "801-909-7083",
          "phone_mobile": "",
          "phone_other": "217-993-4373",
          "address_work": "18670 Ilene Junction",
          "address_home": "9 John Wall Court",
          "address_other": "03 Mallard Terrace",
          "city": "North Port",
          "state": "FL",
          "zip": "34290"
        }
];

function PeopleList(props) {
  const people = props.people;
  const listItems = people.map((person) =>
      <div className="col-md-3 col-sm-4" key={person.id}>
       <div className="card">
        <img className="responsive" src={person.avatar} alt="Avatar"/>
        <div className="card-container">
          <h4><b>{person.first_name} {person.last_name}</b></h4>
          <p><b>Age:</b> {person.age}</p>
          {person.phone_work ? <p><b>Work #:</b><br/> {person.phone_work}</p> : null}
          {person.phone_home ? <p><b>Home #:</b><br/> {person.phone_home}</p> : null}
          {person.phone_mobile ? <p><b>Mobile #:</b><br/> {person.phone_mobile}</p> : null}
          {person.phone_other ? <p><b>Other #:</b><br/> {person.phone_other}</p> : null}
          {person.email_work ? <p><b>Work Email:</b><br/> {person.email_work}</p> : null}
          {person.email_home ? <p><b>Home Email:</b><br/> {person.email_home}</p> : null}
          {person.email_other ? <p><b>Other Email:</b><br/> {person.email_other}</p> : null}
          {person.address_home ? <p><b>Address:</b> <br/>
            {person.address_home}<br/>
            {person.city}, {person.state} {person.zip}
          </p>: null}
          <a href="/home">See More..</a>
        </div>
        </div>
      </div>
  );
  return (
    <div className="row">{listItems}</div>
  );
}

ReactDOM.render(
  <PeopleList people={people} />,document.getElementById('root'));
