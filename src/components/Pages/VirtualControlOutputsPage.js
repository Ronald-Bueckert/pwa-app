import React from 'react';
import ExpandedDetectionZoneListItem from '../ExpandedDetectionZoneListItem'

export const VirtualControlOutputsPage = () => {
  return (
    <div className='abc 
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
          <ExpandedDetectionZoneListItem idTag="chck1" index="1" Text="Detection Zone"></ExpandedDetectionZoneListItem>
          <ExpandedDetectionZoneListItem idTag="chck2" index="2" Text="Alarm Zone"></ExpandedDetectionZoneListItem>
          <ExpandedDetectionZoneListItem idTag="chck3" index="3" Text="Control Zone"></ExpandedDetectionZoneListItem>
        </div>
      </div>
    </div>
  );
};


