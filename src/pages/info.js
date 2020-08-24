import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import FAQ from '../components/FAQ/FAQ';
import LargeCopy from '../components/LargeCopy/LargeCopy';

// ====

const IndexPage = () => (
  <Layout mask>
    <SEO title="Home" />
    <Divider />
    <BigCopy />
    <Divider />
    <LargeCopy>
      <h2>FAQ</h2>
    </LargeCopy>
    <FAQ />
    <Divider />
    <LargeCopy>
      <h2>Contact Us</h2>
      <p>
        <a href="mailto:info@outbreak-fest.co.uk">info@outbreak-fest.co.uk</a>
      </p>
    </LargeCopy>
    <Divider />
    <LargeCopy>
      <h2>Terms &amp; Conditions</h2>
      <ol>
        <li>
          The festival has an age restriction of 14+, and anyone under the age
          of 16 must be accompanied by an adult. It is the responsibility of the
          ticket holder to check before purchasing.
        </li>
        <li>
          Tickets cannot be cancelled or exchanged after purchase unless the
          event is cancelled, rescheduled or otherwise stated.
        </li>
        <li>
          Outbreak Festival will not take responsibility for the validity of
          tickets purchased from unauthorized agents or other sources.
        </li>
        <li>
          The management cannot be held responsible for lost or stolen tickets.
        </li>
        <li>
          Unlawful resale, or attempted unlawful resale of a ticket is grounds
          for seizure or cancellation without refund or other compensation.
        </li>
        <li>
          Tickets cannot be used for competitions, promotions or advertising
          without written permission of the event promoter. Failure to adhere to
          these conditions may result in the ticket holder being refused entry
          or removed from the venue without refund or other compensation.
        </li>
        <li>
          Management reserves the right to refuse admission, and customers may
          be subject to a search on entry.
        </li>
        <li>
          Customers may be ejected or not permitted into the venue and will be
          asked to surrender tickets held by the ticket holder, if, in the
          reasonable opinion of the venue, the ticket holder is a risk to the
          safety of any patron or affects the enjoyment of other patrons; and/or
          the running of the event; and/or the ticket holder’s behaviour is
          deemed unacceptable. Examples include: being (or appearing to be):
          drunk or incapable or intoxicated, under age (where relevant to the
          event), abusive, threatening, behaving anti-socially, carrying
          offensive weapons or illegal substances, declining to be searched or
          are in breach of the ticket Terms and Conditions.
        </li>
        <li>
          No food or drink is permitted to be brought into the venue. A variety
          of food and beverages will be available for purchase inside the venue.
        </li>
        <li>There is no re-admission once you have left the venue.</li>
        <li>
          Ticket holders consent to any filming and sound recordings as members
          of the audience.
        </li>
        <li>
          The use of unauthorised cameras, video and/or sound recording
          equipment is prohibited and such items may be confiscated during the
          performance at the ticket holder’s own risk.
        </li>
        <li>
          Animals, with the exception of assistance dogs, are not permitted in
          the venue and on some events may not be permitted in the performance
          area.
        </li>
        <li>
          This is a no barrier event, by purchasing a ticket you understand the
          precautions you should take to ensure your own safety. The promoter
          accepts no liability for any injuries caused through the actions of
          either yourself or other attendees.
        </li>
        <li>
          Customers are requested to address any special access requirements in
          advance of their visit by contacting
          <a href="mailto:ticketing@outbreak-fest.co.uk">
            ticketing@outbreak-fest.co.uk
          </a>
        </li>
        <li>
          In case of emergency, please follow instructions and directions from
          staff.
        </li>
        <li>Smoking is strictly prohibited inside the venue.</li>
        <li>
          When purchasing alcohol if you appear to be under the age of 25 you
          may be asked for proof of age.
        </li>
        <li>Please consider our neighbours and leave the venue quietly.</li>
        <li>
          The venue and event promoter are not liable for any personal travel,
          accommodation or hospitality arrangement made relating to the event or
          cancellation of the event.
        </li>
        <li>Flashing lights may be used as part of the event production.</li>
        <li>
          Please check your tickets, as mistakes cannot always be rectified.
        </li>
        <li>
          The Promoter, The Venue and Ticket Agents accept no responsibility for
          any personal property.
        </li>
        <li>
          Tickets may be restricted to a maximum number per person. We reserve
          the right to cancel tickets purchased in excess of this number.
        </li>
      </ol>
    </LargeCopy>
    <SocialMedia />
  </Layout>
);

export default IndexPage;
