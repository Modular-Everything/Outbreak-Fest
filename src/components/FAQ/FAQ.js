import React from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

import Map from '../../images/map.png';

// ====

const FAQ = () => {
  return (
    <div className="container">
      <QAWrap>
        <Collapsible trigger="I'm in a band and want to submit us to play, who do I contact?">
          <p>
            The 2022 Line-up is full and we are not currently accepting
            submissions.
          </p>
        </Collapsible>
        <Collapsible trigger="When are the next wave of bands being announced?">
          <p>
            All information regarding announcements will be posted on our social
            media.
          </p>
        </Collapsible>
        <Collapsible trigger="How do I get to the venue?">
          <address>
            <strong>Bowlers Exhibition Centre</strong>, Longbridge Rd, Trafford
            Park, Stretford, Manchester M17 1SN
          </address>
          o
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
        <Collapsible trigger="Where can I stay?">
          <p>
            There are a number of popular hotel chains a short drive / walk from
            the venue such as Holiday Inn, Travelodge, Premier Inn etc. If these
            hotels do not suit your requirements we advise you look closer
            towards the city centre to find something more suitable
          </p>
        </Collapsible>
        <Collapsible trigger="What bands are playing which days?">
          <p>Day splits will be announced closer to the event.</p>
        </Collapsible>
        <Collapsible trigger="What time are doors?">
          <p>
            Doors are scheduled for 11am each day, these are subject to change
            so please keep an eye on our social media and your email for any
            changes.
          </p>
        </Collapsible>
        <Collapsible trigger="What time do the bands start?">
          <p>Straight after doors open. </p>
        </Collapsible>
        <Collapsible trigger="What ID do I need to bring with me?">
          <p>
            We will be employing a “Challenge 25” scheme so Under 18’s (or those
            who look under 25) must bring an official ID (passport, photo
            drivers licence etc).
          </p>
          <p>
            Attendees without relevant ID will be issued with an Under 18
            wristband (and thus will be refused alcohol at the bar).
          </p>
        </Collapsible>
        <Collapsible trigger="Can I bring my camera?">
          <p>
            If your camera has a detachable lense it will not be permitted into
            the event without appropriate accreditation arranged in advance.
          </p>
          <p>
            Other cameras such as disposable / point &amp; shoot are permitted
            at your own risk.
          </p>
        </Collapsible>
        <Collapsible trigger="Are there any age restrictions?">
          <p>
            Yes 14+, anyone under the age of 16 must be accompanied by an adult
            at all times
          </p>
        </Collapsible>
        <Collapsible trigger="Can I bring my own drinks / alcohol?">
          <p>No, we have a fully licensed bar at the event.</p>
        </Collapsible>
        <Collapsible trigger="Is there food?">
          <p>
            Yes, we have plenty of great vegan food traders at the event who
            will be running all through the event.
          </p>
        </Collapsible>
        <Collapsible trigger="Is there disabled access?">
          <p>
            Yes - 2 for 1 PA scheme, Disabled toilets and viewing area
            available. Please contact us at{' '}
            <a href="mailto:info@outbreak-fest.co.uk?subject=Disabled access">
              info@outbreak-fest.co.uk
            </a>{' '}
            with the subject &ldquo;Disabled access&rdquo; in advance of the
            event.
          </p>
          <p>
            If you do not contact us in advance of the event we can not
            guarentee you access to the festival due to safety restrictions.
          </p>
        </Collapsible>
        <Collapsible trigger="What should I do with my valuables?">
          <p>
            Try to leave as many valuables at home as possible. For any
            valuables that you absolutely have to bring with you we recommend
            using the cloakroom on site, items will be stored for a small fee.
          </p>
        </Collapsible>
        <Collapsible trigger="What is the parking like?">
          <p>
            We have space for hundreds of cars on site free of charge, parking
            officials will be on hand to assist. These are at a first come first
            serve basis and we do not guarantee you will get a space.
          </p>
        </Collapsible>
        <Collapsible trigger="Can I leave my car at the venue overnight?">
          <p>
            No, the car park must be cleared straight after the event finishes
            each night. Anyone who does leave their car on-site overnight will
            be fined, potentially towed and will be refused access to the
            festival.
          </p>
        </Collapsible>
        <Collapsible trigger="I'm a trader and would like to trade at Outbreak Fest, how do I get in touch?">
          <p>
            We are currently accepting vegan friendly traders, please send an
            email to{' '}
            <a href="mailto:info@outbreak-festival.co.uk?subject=Trading at Outbreak">
              info@outbreak-festival.co.uk
            </a>{' '}
            to discuss.
          </p>
        </Collapsible>
        <Collapsible trigger="I've ordered my ticket, When will it arrive?">
          <p>
            Your ticket will arrive approximately 14 days before the event. If
            it hasn&apos;t arrived 7 days before the event please contact{' '}
            <a href="mailto:ticketing@outbreak-fest.co.uk?subject=My ticket hasn't arrived">
              ticketing@outbreak-fest.co.uk
            </a>
          </p>
        </Collapsible>
        <Collapsible trigger="I've bought a ticket but I can no longer go, can I please have a refund?">
          <p>
            Unfortunately unless the event is cancelled we are unable to offer
            refunds.
          </p>
        </Collapsible>
        <Collapsible trigger="I've bought a weekend ticket but I can only go 1 or 2 of the days, can my friend use my ticket the other day?">
          <p>
            No, you will be given a weekend ticket wristband that is not
            interchangeable. Your friend would need to purchase their own
            ticket.
          </p>
        </Collapsible>
        <Collapsible trigger="Can I buy a day ticket?">
          <p>
            Day tickets will be available much closer to the event when day
            splits are announced, these will be very limited so we recommend
            purchasing a weekend ticket if you do not want to miss out.
          </p>
        </Collapsible>
        <Collapsible trigger="Contact Us">
          <p>
            General:
            <br />
            <a href="mailto:info@outbreak-fest.co.uk">
              info@outbreak-fest.co.uk
            </a>
          </p>
          <p>
            Ticketing:
            <br />
            <a href="mailto:ticketing@outbreak-fest.co.uk">
              ticketing@outbreak-fest.co.uk
            </a>
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
