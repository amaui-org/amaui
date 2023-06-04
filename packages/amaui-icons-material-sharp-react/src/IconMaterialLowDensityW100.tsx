import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowDensityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowDensityW100'

      short_name='LowDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 456v-80h28v80h-28Zm0-160v-28h28v28h-28Zm108 268v-28h80v28h-80Zm0-268v-28h80v28h-80Zm160 268v-28h28v28h-28Zm0-118v-80h28v80h-28ZM172 884V536h28v320h560V296H440v-28h348v616H172Z"/>
    </Icon>
  );
});

IconMaterialLowDensityW100.displayName = 'AmauiIconMaterialLowDensityW100';

export default IconMaterialLowDensityW100;
