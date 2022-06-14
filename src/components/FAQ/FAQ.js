import React from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

import TramMap from '../../images/tram-map.png';
import Map from '../../images/map.png';

// ====

const FAQ = () => {
  return (
    <div className="container">
      <QAWrap>
        <Collapsible trigger="Where can I park my vehicle?">
          <p>
            There is no parking on-site. There is, however, limited on street
            parking options in the surrounding area. The festival is located on
            a working industrial estate so expect the roads to be very busy on
            Friday especially. We strongly advise everyone to make use of public
            transport throughout the weekend and car share where possible.
          </p>
        </Collapsible>

        <Collapsible trigger="How do I get to the venue on public transport?">
          <p>
            If you are arriving via the city centre, airport, or staying in
            Salford Quays, Didsbury or any other area outside of the centre,
            purchase a ticket or tap on / off with a contactless card, then
            simply catch any tram heading to Cornbrook and change here. Take the
            next available tram towards Trafford Park and get off at Parkway.
            Follow the festival signs from here. The trams run regularly
            throughout the weekend until around 11:30pm.
          </p>
          <p>
            <a
              href="https://tfgm.com/public-transport/tram/network-map"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TramMap} alt="Manchester Tram Map" />
            </a>
          </p>
        </Collapsible>

        <Collapsible trigger="Can I re-enter the festival on the same day?">
          <p>Yes, the final entry is 8pm.</p>
        </Collapsible>

        <Collapsible trigger="Is there a barrier?">
          <p>
            As usual, there is no barrier directly in front of the stages.
            However, to avoid crowd surging we have decided to install barrier
            half way into the audience. This is to manage the flow of people in
            and out of this area, and to keep everybody safe. Everyone will have
            the opportunity to access the front section, subject to capacity at
            any given time. The area in front of the main stage alone can hold
            twice the capacity that any previous Outbreak Fest has ever had. It
            was important for us to create a separate space for those who want
            to simply watch and enjoy the performance, rather than participate,
            but still retain the intimate experience that you all expect from
            us.
          </p>
        </Collapsible>

        <Collapsible trigger="How do I get to the venue by car?">
          <p>
            Again we suggest using public transport from your accommodation, but
            if that is not possible then please put the following address into
            your sat nav / smartphone - Bowlers Exhibition Centre, Longbridge
            Road, Trafford Park, Stretford, Manchester, M17 1SN.
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/Bowlers+Exhibition+Centre/@53.4669051,-2.3409825,13z/data=!4m5!3m4!1s0x487baf4f1cf96ccd:0xa0c15f256019890e!8m2!3d53.4689026!4d-2.3296059"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Map} alt="Directions to the venue" />
            </a>
          </p>
        </Collapsible>

        <Collapsible trigger="Can I bring a bag into the venue?">
          <p>
            Yes you can. The bag needs to be no bigger than a backpack and will
            be subject to a check by security, at the gates.
          </p>
        </Collapsible>

        <Collapsible trigger="Where can I stay?">
          <p>
            There are a number of popular hotel chains in Trafford Park however
            many of these now appear to be booked up. If you still have not
            found accommodation we advise you to look closer to the city centre,
            salford quays or on Airbnb.
          </p>
        </Collapsible>

        <Collapsible trigger="Will there be a cloakroom?">
          <p>
            Yes there is a cloakroom inside the venue, in the foyer between the
            main and second stage. Please bare in mind that we have limited
            capacity for belongings and operate on a first come, first serve
            basis. So be prepared to keep your bag on you for the day. Maybe a
            smaller shoulder / waist bag would be more appropriate?
          </p>
        </Collapsible>

        <Collapsible trigger="Can I bring a water bottle?">
          <p>
            You sure can and we absolutely encourage you to do so, and to stay
            hydrated throughout the weekend. Please make sure your bottle is
            plastic. It needs to be completely empty when you pass through the
            festival gates. We have waterpoints in the outside area. Please do
            not que at the bar for tap water.
          </p>
        </Collapsible>

        <Collapsible trigger="What do I need to bring with me?">
          <p>
            You must bring your ID. The venue operates a challenge 21 policy at
            the bar. Please also bring, depending on the weather forecast - sun
            cream, a sun hat, a coat or jacket. A plastic water bottle is
            essential whatever the weather. A mobile phone to keep in touch with
            friends and family.
          </p>
        </Collapsible>

        <Collapsible trigger="What can I NOT bring with me?">
          <p>
            Please do not bring alcohol, drugs, sharp objects or any other
            illegal substances into the festival site. If you are found in
            possession of these you will not be able to enter the event.
            Security checks will be in operation. Smoking is NOT permitted
            inside the venue - this includes the use of vapes or e-cigarettes.
            You may smoke outside. Please do not bring electrical equipment such
            as laptops, ipads,drones or professional cameras with a detachable
            lens. Small disposable, point and shoot or film cameras are fine
            though.
          </p>
        </Collapsible>

        <Collapsible trigger="What time does the festival open?">
          <p>
            Gates and wristband exchange open at 11am Friday, Saturday and
            Sunday. A full artist schedule will be posted two weeks before the
            event so you can plan your day. The Thursday pre show opens at 6pm,
            however, wristband exchange will be open to everyone from 5pm until
            10pm if you are in the area and would like to get your wristband
            early.
          </p>
        </Collapsible>

        <Collapsible trigger="What are the festival age restrictions?">
          <p>
            14+, anyone under the age 16 must be accompanied by an adult, 18 or
            over at all times.
          </p>
        </Collapsible>

        <Collapsible trigger="Is there food available?">
          <p>
            Yes we have plenty of street food vendors on-site, serving a huge
            variety of different foods. They are all fully vegan and have gluten
            free options available. Please speak to the vendors directly on the
            day if you have any specific dietary requirements or allergies.
          </p>
        </Collapsible>

        <Collapsible trigger="Does the festival have disabled access?">
          <p>
            Yes, we have accessibility ramps, viewing platforms in all live
            rooms and disbled toilets. Please contact us at
            info@outbreak-fest.co.uk to discuss your requirements in advance. If
            you do not get in touch prior to the event we won&lsquo;t be able to
            guarantee access to the viewing platform.
          </p>
        </Collapsible>

        <Collapsible trigger="When will my ticket arrive?">
          <p>
            Your ticket will arrive 14 days before the event. If it has not
            arrived 7 days before the event then please email
            ticketing@outbreak-fest.co.uk
          </p>
        </Collapsible>

        <Collapsible trigger="I've bought a ticket but can no longer go?">
          <p>
            Unfortunately unless the event is cancelled we are unable to offer
            refunds. Please sell your ticket on our official resale site here:
            outbreak-fest.co.uk/officialresale
          </p>
        </Collapsible>

        <Collapsible trigger="Can I buy a day-ticket?">
          <p>
            Very limited day tickets were released onto our website, please
            check availability here outbreak-fest.co.uk/tickets
          </p>
        </Collapsible>
      </QAWrap>
    </div>
  );
};

export default FAQ;

// ====

const QAWrap = styled.div`
  & .Collapsible {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 3rem;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    & .Collapsible__trigger {
      display: block;
      width: calc(100% - 2rem);
      font-family: 'EurostileExt', Arial, Helvetica, sans-serif;
      font-size: 1.125rem;
      line-height: 1.2;
      font-weight: bold;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      padding: 1rem;
      background-color: var(--light);
      color: var(--primary);
      cursor: pointer;
    }

    &:nth-of-type(odd) .Collapsible__trigger {
      background-color: var(--secondary);
    }
  }

  & .Collapsible__contentInner {
    font-size: 1.125rem;
    padding: 1rem;
    border: 1px solid var(--light);
    border-top: none;
    color: var(--light);

    & img {
      width: 100%;
    }

    & a {
      color: var(--secondary);

      &:hover {
        color: var(--light);
      }
    }
  }
`;
