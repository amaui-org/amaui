import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndFilled'

      short_name='PinEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.225 13.65 11 11.425v1.225q0 .425-.287.712-.288.288-.713.288t-.712-.288Q9 13.075 9 12.65V9q0-.425.288-.713Q9.575 8 10 8h3.65q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288H12.4l2.25 2.25q.275.275.275.688 0 .412-.275.712-.3.275-.712.288-.413.012-.713-.288ZM19 20q-1.25 0-2.125-.875T16 17q0-1.25.875-2.125T19 14q1.25 0 2.125.875T22 17q0 1.25-.875 2.125T19 20ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v6h-2V6H4v12h10v2Z"/>
    </Icon>
  );
});

IconMaterialPinEndFilled.displayName = 'AmauiIconMaterialPinEndFilled';

export default IconMaterialPinEndFilled;
