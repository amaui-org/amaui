import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeSharpFilled'
      short_name='NearMe'

      {...props}
    >
      <path d="M12.9 21 10.05 13.95 3 11.1V9.7L21 3L14.3 21Z"/>
    </Icon>
  );
});

export default IconMaterialNearMeSharpFilled;
