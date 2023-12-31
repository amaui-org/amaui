import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKidStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStarFilled'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Z"/>
    </Icon>
  );
});

IconMaterialKidStarFilled.displayName = 'AmauiIconMaterialKidStarFilled';

export default IconMaterialKidStarFilled;
