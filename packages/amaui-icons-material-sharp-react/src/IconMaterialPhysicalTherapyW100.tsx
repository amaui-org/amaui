import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhysicalTherapyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhysicalTherapyW100'

      short_name='PhysicalTherapy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M476 729Zm-304 83V704q0-62 43-105t105-43h429q16.286 0 27.643 10.978T788 594q0 14-8 24t-21 14l-121 32v150q0 15.909-7.057 28.788T612 864q-12.148 8.25-26.574 10.125Q571 876 555.593 869.756L410 812H172Zm438-120H365q-15 0-25 10t-10 24q0 10 5.5 19.5T353 760l213 84q16 6 30-3.5t14-26.5V692Zm-410 92h141q-17-9-28-24.158-11-15.158-11-32.842 0-25.863 18.568-44.432Q339.137 664 365 664h157l230-59q5-2 7-5t1-7q-1-4-3.5-6.5T749 584H320q-50 0-85 35t-35 85v80Zm200-288q-44.55 0-76.275-31.725Q292 432.55 292 388q0-44.55 31.725-76.275Q355.45 280 400 280q44.55 0 76.275 31.725Q508 343.45 508 388q0 44.55-31.725 76.275Q444.55 496 400 496Zm0-28q33 0 56.5-23.5T480 388q0-33-23.5-56.5T400 308q-33 0-56.5 23.5T320 388q0 33 23.5 56.5T400 468Zm76 261Zm-76-341Z"/>
    </Icon>
  );
});

IconMaterialPhysicalTherapyW100.displayName = 'AmauiIconMaterialPhysicalTherapyW100';

export default IconMaterialPhysicalTherapyW100;
