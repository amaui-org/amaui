import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriceCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheck'

      short_name='PriceCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 14.975q-.425 0-.713-.287-.287-.288-.287-.713H5q-.425 0-.713-.287Q4 13.4 4 12.975t.287-.713q.288-.287.713-.287h4v-2H5q-.425 0-.713-.287Q4 9.4 4 8.975v-4q0-.425.287-.713.288-.287.713-.287h1.5q0-.425.287-.713.288-.287.713-.287t.713.287q.287.288.287.713H10q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288H6v2h4q.425 0 .713.287.287.288.287.713v4q0 .425-.287.713-.288.287-.713.287H8.5q0 .425-.287.713-.288.287-.713.287Zm6.45 5.575q-.2 0-.375-.062-.175-.063-.325-.213l-2.85-2.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.15 2.15 4.95-4.95q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-5.65 5.65q-.15.15-.325.213-.175.062-.375.062Z"/>
    </Icon>
  );
});

IconMaterialPriceCheck.displayName = 'AmauiIconMaterialPriceCheck';

export default IconMaterialPriceCheck;
