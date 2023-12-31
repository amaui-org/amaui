import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTravelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelW100'

      short_name='Travel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m292-292-92-50q-5-2-5.5-7t3.5-9l4-4q2-2 4.5-2.5t4.5-.5l93 13 180-180-294-161q-6-3-7.5-10t3.5-12l4-5q3-3 6.5-4t7.5 0l374 98 166-166q10-10 24-10t24 10q10 10 10 24t-10 24L626-578l98 373q1 5-.5 8.5T719-190l-2 2q-6 5-13.5 4t-11.5-8L532-484 352-304l13 92q1 3 0 5.5t-3 4.5l-2 2q-5 5-11 4t-9-6l-48-90Z"/>
    </Icon>
  );
});

IconMaterialTravelW100.displayName = 'AmauiIconMaterialTravelW100';

export default IconMaterialTravelW100;
