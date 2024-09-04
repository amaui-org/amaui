import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComedyMaskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComedyMaskFilled'

      short_name='ComedyMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q66 0 113-47t47-113H320q0 66 47 113t113 47Zm0 200q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440v-440h720v440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM280-600h160q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600Zm240 0h160q0-33-23.5-56.5T600-680q-33 0-56.5 23.5T520-600Z"/>
    </Icon>
  );
});

IconMaterialComedyMaskFilled.displayName = 'AmauiIconMaterialComedyMaskFilled';

export default IconMaterialComedyMaskFilled;
