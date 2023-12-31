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
      <path d="M201-454q-29-38-49-77.5T132-620q0-71 48.5-119.5T300-788q52 0 98.5 29t81.5 83q35-55 81-83.5t99-28.5q69 0 117.5 47T828-625q-24-14-51.5-21.5T720-654q-85 0-146.5 57.5T507-454h-79l-88-131-88 131h-51Zm279 278-22-20q-87-78-142.5-133T224-426h43l73-109 73 109h94q3 47 24 86t55 66q-19 18-40 37.5T502-196l-22 20Zm226-242v-156h28v156h-28Zm14 114q-11 0-18.5-7.5T694-330q0-11 7.5-18.5T720-356q11 0 18.5 7.5T746-330q0 11-7.5 18.5T720-304Z"/>
    </Icon>
  );
});

IconMaterialPulseAlertW100Filled.displayName = 'AmauiIconMaterialPulseAlertW100Filled';

export default IconMaterialPulseAlertW100Filled;
