import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowDensity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowDensity'

      short_name='LowDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 456v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120 936V536h80v320h560V296H440v-80h400v720H120Z"/>
    </Icon>
  );
});

IconMaterialLowDensity.displayName = 'AmauiIconMaterialLowDensity';

export default IconMaterialLowDensity;
