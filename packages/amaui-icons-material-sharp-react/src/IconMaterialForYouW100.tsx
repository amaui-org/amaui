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
      <path d="M480-460q71 0 144-11.5T760-504v312q-56 23-134 37.5T480-140q-68 0-146-14.5T200-192v-312q63 21 136 32.5T480-460Zm252 248v-254q-47 14-120 24t-132 10q-59 0-132-10t-120-24v254q44 18 118 31t134 13q60 0 134-13t118-31ZM480-820q49.5 0 84.75 35.25T600-700q0 49.5-35.25 84.75T480-580q-49.5 0-84.75-35.25T360-700q0-49.5 35.25-84.75T480-820Zm.035 212Q518-608 545-635.035q27-27.036 27-65Q572-738 544.965-765q-27.036-27-65-27Q442-792 415-764.965q-27 27.036-27 65Q388-662 415.035-635q27.036 27 65 27ZM480-700Zm0 383Z"/>
    </Icon>
  );
});

IconMaterialForYouW100.displayName = 'AmauiIconMaterialForYouW100';

export default IconMaterialForYouW100;
