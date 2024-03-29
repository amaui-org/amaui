import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOff'

      short_name='LinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.825 13-2-2h2q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288Zm3.425 3.45-1.5-1.55q.975-.275 1.613-1.063Q20 13.05 20 12q0-1.25-.875-2.125T17 9h-3q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h3q2.075 0 3.538 1.438Q22 9.875 22 12q0 1.425-.75 2.637-.75 1.213-2 1.813Zm-.15 5.45-17-17q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM10 17H7q-2.075 0-3.537-1.463Q2 14.075 2 12q0-1.75 1.062-3.088Q4.125 7.575 5.75 7.15L7.6 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h3q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17Zm1.6-4H8.175q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q7.75 11 8.175 11h1.45Z"/>
    </Icon>
  );
});

IconMaterialLinkOff.displayName = 'AmauiIconMaterialLinkOff';

export default IconMaterialLinkOff;
