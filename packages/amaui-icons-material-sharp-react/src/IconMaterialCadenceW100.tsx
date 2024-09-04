import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCadenceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CadenceW100'

      short_name='Cadence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-469h28v469h-28ZM318-283v-248h28v248h-28Zm296 0v-248h28v248h-28ZM170-393v-28h28v28h-28Zm592 0v-28h28v28h-28ZM132-576v-28h20q45.29 0 84.64-22Q276-648 299-686q29-48 77.03-75t104-27Q536-788 584-761t77 75q22 38 61 60t86 22h20v28h-20q-53 0-98.5-25.5T637-672q-25-42-66.71-65-41.71-23-90.29-23-47.54 0-89.27 23T324-672q-28 45-73.5 70.5T152-576h-20Z"/>
    </Icon>
  );
});

IconMaterialCadenceW100.displayName = 'AmauiIconMaterialCadenceW100';

export default IconMaterialCadenceW100;
