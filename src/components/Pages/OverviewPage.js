import React from 'react';
import ExpandedEventListeItem from '../ExpandedEventListItem'

export const OverviewPage = () => {
  return (
    <div className='OverViewPage
      text-slate-100
      text-lg

      h-screen
      w-screen
      p-1
      m-0
      top-0

      bg-gradient-to-br from-slate-900 to-slate-700' >
      <div class="col text-base">
        <div class="tabs m-0 w-full min-w-min">
          <ExpandedEventListeItem idTag="chck1" index="1" event="Fire" text="Detection Zone 1"></ExpandedEventListeItem>
          <ExpandedEventListeItem idTag="chck2" index="2" event="Fire" text="Detection Zone 2"></ExpandedEventListeItem>

          <ExpandedEventListeItem idTag="chck3" index="3" event="First Fire" text="Detection Zone 2"></ExpandedEventListeItem>

          <ExpandedEventListeItem idTag="chck4" index="4" event="Fault" text="Detection Zone 1"></ExpandedEventListeItem>
          <ExpandedEventListeItem idTag="chck5" index="5" event="Fault" text="Detection Zone 2"></ExpandedEventListeItem>

          <ExpandedEventListeItem idTag="chck6" index="6" event="Disable" text="Detection Zone 1"></ExpandedEventListeItem>
          <ExpandedEventListeItem idTag="chck7" index="7" event="Disable" text="Detection Zone 2"></ExpandedEventListeItem>

          <ExpandedEventListeItem idTag="chck8" index="8" event="Alarm" text="Control Zone 3" label=" -  Cellar monitoring"></ExpandedEventListeItem>
        </div>
      </div>
    </div>
  );
};