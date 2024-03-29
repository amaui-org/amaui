import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeFilled'

      short_name='GarageHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12h-3V11H7v10Zm5-2h6v-2H9Zm0-4h6v-2H9Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeFilled.displayName = 'AmauiIconMaterialGarageHomeFilled';

export default IconMaterialGarageHomeFilled;
