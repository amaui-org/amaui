import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlinesTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesTwoTone'
      short_name='Airlines'

      {...props}
    >
      <rect fill="none" height="24" width="24" y="0"/><path d="M14.05,6L5.8,18h11.54l2.25-12H14.05z M14.5,14c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 s2.5,1.12,2.5,2.5C17,12.88,15.88,14,14.5,14z" opacity=".3"/><path d="M17.34,18H5.8l8.25-12h5.54L17.34,18z M13,4L2,20h17l3-16H13z M14.5,9c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5 s2.5-1.12,2.5-2.5S15.88,9,14.5,9z"/>
    </Icon>
  );
});

IconMaterialAirlinesTwoTone.displayName = 'AmauiIconMaterialAirlinesTwoTone';

export default IconMaterialAirlinesTwoTone;
