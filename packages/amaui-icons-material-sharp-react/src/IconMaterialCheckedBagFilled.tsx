import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckedBagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagFilled'

      short_name='CheckedBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-280v-440h20q0-50 35-85t85-35q50 0 85 35t35 85h20v440H340Zm80-440h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm260 440v-440h120v440H680Zm-520 0v-440h120v440H160ZM80-120v-80h800v80H80Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagFilled.displayName = 'AmauiIconMaterialCheckedBagFilled';

export default IconMaterialCheckedBagFilled;
