import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomExtraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtraW100'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 16.35q-.625 0-1.062-.437Q3 15.475 3 14.85V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.85q0 .3.25.55.25.25.55.25h7.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm14.175 3.175q-.275.125-.537.037-.263-.087-.388-.362l-2.25-4.55H8.05q-.975 0-1.662-.688Q5.7 13.275 5.7 12.3V3.65h4.7v7.3h4.2q.4 0 .7.225.3.225.5.575L18.85 18l1.8-.8q.275-.1.55-.075.275.025.4.275.15.275.025.55t-.425.4Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtraW100.displayName = 'AmauiIconMaterialAirlineSeatLegroomExtraW100';

export default IconMaterialAirlineSeatLegroomExtraW100;
