import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeSharpW100'
      short_name='NearMe'

      {...props}
    >
      <path d="M13.2 18.85 10.9 13.05 5.1 10.7 5.05 10.3 18.95 5 13.6 18.85ZM13.4 17.4 17.75 6.2 6.5 10.5 11.4 12.5ZM11.4 12.5Z"/>
    </Icon>
  );
});

export default IconMaterialNearMeSharpW100;
