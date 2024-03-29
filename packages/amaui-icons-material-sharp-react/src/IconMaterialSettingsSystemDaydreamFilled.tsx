import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSystemDaydreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSystemDaydreamFilled'

      short_name='SettingsSystemDaydream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16h6.5q1.05 0 1.775-.725Q18 14.55 18 13.5q0-1.05-.725-1.775Q16.55 11 15.5 11h-.05q-.2-1.275-1.112-2.137Q13.425 8 12.15 8q-1.05 0-1.95.525Q9.3 9.05 8.85 10h-.125q-1.175 0-1.95.9Q6 11.8 6 13q0 1.25.875 2.125T9 16Zm-7 4V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialSettingsSystemDaydreamFilled.displayName = 'AmauiIconMaterialSettingsSystemDaydreamFilled';

export default IconMaterialSettingsSystemDaydreamFilled;
