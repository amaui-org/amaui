import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForYouW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForYouW100'

      short_name='ForYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-460q60 0 122.5-8T722-493q14-5 26 4.404 12 9.405 12 24.596v251q0 10-5.577 17.38Q748.846-188.24 740-185q-63 22-128.5 33.5T480-140q-66 0-131.5-11.5T220-185q-8.846-3.24-14.423-10.62Q200-203 200-213v-251q0-15.191 12-24.596Q224-498 238-493q57 17 119.5 25t122.5 8Zm252 248v-254q-47 14-120 24t-132 10q-59 0-132-10t-120-24v254q44 18 118 31t134 13q60 0 134-13t118-31ZM480-820q49.5 0 84.75 35.25T600-700q0 49.5-35.25 84.75T480-580q-49.5 0-84.75-35.25T360-700q0-49.5 35.25-84.75T480-820Zm.035 212Q518-608 545-635.035q27-27.036 27-65Q572-738 544.965-765q-27.036-27-65-27Q442-792 415-764.965q-27 27.036-27 65Q388-662 415.035-635q27.036 27 65 27ZM480-700Zm0 383Z"/>
    </Icon>
  );
});

IconMaterialForYouW100.displayName = 'AmauiIconMaterialForYouW100';

export default IconMaterialForYouW100;
