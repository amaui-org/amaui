import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightShelterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterSharp'
      short_name='NightShelter'

      {...props}
    >
      <path d="M4 21V9L12 3L20 9V21ZM6 19H18V10L12 5.5L6 10ZM7 18H8V16.5H16V18H17V14Q17 13.175 16.413 12.587Q15.825 12 15 12H11.5V15.5H8V11H7ZM9.75 15Q10.275 15 10.637 14.637Q11 14.275 11 13.75Q11 13.225 10.637 12.863Q10.275 12.5 9.75 12.5Q9.225 12.5 8.863 12.863Q8.5 13.225 8.5 13.75Q8.5 14.275 8.863 14.637Q9.225 15 9.75 15ZM6 19H12H18H6Z"/>
    </Icon>
  );
});

IconMaterialNightShelterSharp.displayName = 'AmauiIconMaterialNightShelterSharp';

export default IconMaterialNightShelterSharp;
