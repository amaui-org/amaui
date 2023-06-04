import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightTakeoffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffW100Filled'

      short_name='FlightTakeoff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.825 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1.7-5.25q-.25.075-.487-.025-.238-.1-.363-.325l-1.55-2.725q-.1-.175-.037-.325.062-.15.262-.2.075-.025.163 0 .087.025.137.075L5.325 13l5.6-1.5L7.15 5.125q-.125-.2-.05-.388.075-.187.3-.262.125-.05.25-.013.125.038.225.113l6.65 5.925 5.3-1.4q.5-.125.9.187.4.313.4.813 0 .35-.187.612-.188.263-.513.338Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffW100Filled.displayName = 'AmauiIconMaterialFlightTakeoffW100Filled';

export default IconMaterialFlightTakeoffW100Filled;
