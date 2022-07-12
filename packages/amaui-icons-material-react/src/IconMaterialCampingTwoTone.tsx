import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingTwoTone'
      short_name='Camping'

      {...props}
    >
      <path d="M1.75 22.5v-5.125l8.35-11.25L8.275 3.6 10.7 1.8 12 3.575l1.3-1.75L15.75 3.6 13.9 6.125l8.375 11.25V22.5Zm6.85-3.025h6.8l-3.4-4.75Z"/>
    </Icon>
  )
});

export default IconMaterialCampingTwoTone;
