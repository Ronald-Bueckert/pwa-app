import React from 'react';
import ExpandedDeviceListeItem from '../ExpandedDeviceListeItem'

export const ScanPage = () => {
  return (
    <div class="ScanPage
      text-slate-100
      text-lg

      h-screen
      w-screen
      p-0
      m-0
      top-0

      bg-gradient-to-br from-slate-900 to-slate-700" >
      <h1>INSPIRE loop scan</h1>
      <div class="text-base">
        <h2>Loop <b>1</b></h2>
        <div class="tabs m-0 w-full min-w-min">
          <ExpandedDeviceListeItem idTag="chck1" index="1" loop="Loop 1" device="Address 1 M702"></ExpandedDeviceListeItem>
          <ExpandedDeviceListeItem idTag="chck2" index="2" loop="Loop 1" device="Address 2 M721"></ExpandedDeviceListeItem>
          <ExpandedDeviceListeItem idTag="chck3" index="3" loop="Loop 1" device="Address 3 NFXI-OPT"></ExpandedDeviceListeItem>
          <ExpandedDeviceListeItem idTag="chck4" index="4" loop="Loop 1" device="Address 4 NFXI-TDIFF"></ExpandedDeviceListeItem>
        </div>
      </div>
    </div>
  );
};