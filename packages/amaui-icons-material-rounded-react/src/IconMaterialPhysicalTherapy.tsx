import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhysicalTherapy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhysicalTherapy'

      short_name='PhysicalTherapy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M481 780Zm90 190-189-74H160q-17 0-28.5-11.5T120 856V736q0-83 58.5-141.5T320 536h429q38 0 64.5 26t26.5 64q0 31-19 55.5T773 714l-93 27v155q0 21-9.5 38T645 962q-16 11-35 13.5t-39-5.5Zm-83-194H375q-7 0-10.5 4t-4.5 9q-1 5 1.5 9.5t8.5 6.5l230 91V776H488Zm-288 40h84q-2-6-3-12t-1-13q0-39 28-67t67-28h163l214-59q5-2 7-5t1-7q-1-4-3.5-6.5T749 616H320q-50 0-85 35t-35 85v80Zm281-36Zm-81-284q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T480 336q0-33-23.5-56.5T400 256q-33 0-56.5 23.5T320 336q0 33 23.5 56.5T400 416Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialPhysicalTherapy.displayName = 'AmauiIconMaterialPhysicalTherapy';

export default IconMaterialPhysicalTherapy;
