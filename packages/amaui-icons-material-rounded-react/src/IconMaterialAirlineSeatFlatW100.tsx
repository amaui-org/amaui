import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatW100'

      short_name='AirlineSeatFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.7 12.7V9q0-.275.213-.488.212-.212.487-.212h6.9q1.125 0 1.912.787Q20 9.875 20 11v1.7Zm.7-3.7v3Zm-6.05 6.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h15.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1.5-2.7q-.8 0-1.325-.525Q4 11.65 4 10.85q0-.8.525-1.325Q5.05 9 5.85 9q.8 0 1.325.525.525.525.525 1.325 0 .8-.525 1.325-.525.525-1.325.525Zm0-.7q.5 0 .825-.325Q7 11.35 7 10.85q0-.5-.325-.825Q6.35 9.7 5.85 9.7q-.5 0-.825.325-.325.325-.325.825 0 .5.325.825.325.325.825.325Zm4.55 0h8.9v-1q0-.825-.588-1.413Q18.125 9 17.3 9h-6.9Zm-4.55-1.15Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100.displayName = 'AmauiIconMaterialAirlineSeatFlatW100';

export default IconMaterialAirlineSeatFlatW100;
