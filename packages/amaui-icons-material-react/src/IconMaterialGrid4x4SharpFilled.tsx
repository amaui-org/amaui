import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrid4x4SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4SharpFilled'
      short_name='Grid4x4'

      {...props}
    >
      <path d="M5 22V19H2V17H5V13H2V11H5V7H2V5H5V2H7V5H11V2H13V5H17V2H19V5H22V7H19V11H22V13H19V17H22V19H19V22H17V19H13V22H11V19H7V22ZM7 11H11V7H7ZM7 17H11V13H7ZM13 17H17V13H13ZM13 11H17V7H13Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4SharpFilled.displayName = 'AmauiIconMaterialGrid4x4SharpFilled';

export default IconMaterialGrid4x4SharpFilled;
