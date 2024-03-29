import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignLanguageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageFilled'

      short_name='SignLanguage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 24.1q-.425 0-.713-.288-.287-.287-.287-.712t.287-.712q.288-.288.713-.288H10v-1H4q-.425 0-.712-.288Q3 20.525 3 20.1t.288-.712Q3.575 19.1 4 19.1h6v-1H3q-.425 0-.712-.288Q2 17.525 2 17.1t.288-.712Q2.575 16.1 3 16.1h7v-1H4.5q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287h8l-.95-1.85q-.275-.525-.112-1.075.162-.55.637-.85.2-.125.388-.1.187.025.312.15l5.45 5.2q.375.35.575.825.2.475.2.975V21.6q0 1.05-.725 1.775-.725.725-1.775.725Zm4.65-15.675-2.7-2.85q-.275-.3-.262-.725.012-.425.312-.7.3-.275.713-.263.412.013.687.313l2.95 3.1q-.5.125-.925.413-.425.287-.775.712ZM8.575 11.1 6.3 8.725q-.275-.3-.262-.725.012-.425.312-.7.3-.275.712-.263.413.013.688.313L9.625 9.3q-.175.425-.237.9-.063.475.012.9h-.825Zm11.75 2.925q-.15-.25-.325-.475-.175-.225-.4-.425l-5.45-5.2q-.2-.2-.4-.325t-.425-.2L8.95 2.75q-.275-.3-.275-.713 0-.412.3-.687.3-.275.725-.263.425.013.7.313l4.8 5.075.75-.7-3.8-3.975q-.275-.3-.263-.725.013-.425.313-.7.3-.275.713-.263.412.013.687.313l5.5 5.8.7-1.975q.2-.525.688-.8.487-.275 1.037-.15.225.05.35.2.125.15.125.425v7.45q0 .525-.212 1-.213.475-.588.825Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageFilled.displayName = 'AmauiIconMaterialSignLanguageFilled';

export default IconMaterialSignLanguageFilled;
