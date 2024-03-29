import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisplaySettingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplaySettingsFilled'

      short_name='DisplaySettings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 11h1.5V9.75H18v-1.5h-1.5V7H15ZM6 9.75h8v-1.5H6ZM7.5 15H9v-4H7.5v1.25H6v1.5h1.5Zm2.5-1.25h8v-1.5h-8ZM8 21v-2H2V3h20v16h-6v2Z"/>
    </Icon>
  );
});

IconMaterialDisplaySettingsFilled.displayName = 'AmauiIconMaterialDisplaySettingsFilled';

export default IconMaterialDisplaySettingsFilled;
