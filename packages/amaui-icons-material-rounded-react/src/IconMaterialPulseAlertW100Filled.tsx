import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulseAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulseAlertW100Filled'

      short_name='PulseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-432v-128q0-6 4-10t10-4q6 0 10 4t4 10v128q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm-505-22q-29-38-49-77.5T132-620q0-71 48.5-119.5T300-788q52 0 98.5 29t81.5 83q35-55 81-83.5t99-28.5q69 0 117.5 47T828-625q-24-14-51.5-21.5T720-654q-85 0-146.5 57.5T507-454h-79l-63-94q-5-7-11.5-10t-13.5-3q-7 0-13.5 3T315-548l-63 94h-51Zm257 258q-87-78-142.5-133T224-426h27q8 0 14-3.5t11-9.5l64-96 64 96q5 6 11 9.5t14 3.5h78q3 47 24 86t55 66q-19 18-40 37.5T502-196q-5 4-10.5 6t-11.5 2q-6 0-11.5-2t-10.5-6Zm262-108q-11 0-18.5-7.5T694-330q0-11 7.5-18.5T720-356q11 0 18.5 7.5T746-330q0 11-7.5 18.5T720-304Z"/>
    </Icon>
  );
});

IconMaterialPulseAlertW100Filled.displayName = 'AmauiIconMaterialPulseAlertW100Filled';

export default IconMaterialPulseAlertW100Filled;
