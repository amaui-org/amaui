import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingSharpFilled'
      short_name='Camping'

      {...props}
    >
      <path d="M2 22v-4.65l8.75-11.8L9 3.2 10.6 2 12 3.875 13.4 2 15 3.2l-1.75 2.35L22 17.35V22Zm6.225-2h7.55L12 14.725Z"/>
    </Icon>
  );
});

export default IconMaterialCampingSharpFilled;
