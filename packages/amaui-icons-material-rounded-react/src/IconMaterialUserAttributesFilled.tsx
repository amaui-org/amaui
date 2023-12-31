import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUserAttributesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UserAttributesFilled'

      short_name='UserAttributes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-680v-80h320v80H560Zm0 160v-80h320v80H560Zm0 160v-80h320v80H560Zm-240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v76H80Z"/>
    </Icon>
  );
});

IconMaterialUserAttributesFilled.displayName = 'AmauiIconMaterialUserAttributesFilled';

export default IconMaterialUserAttributesFilled;
