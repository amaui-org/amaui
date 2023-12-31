import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccess2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccess2W100'

      short_name='SwitchAccess2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-536h338v100h-28v-72H120v480h282v-72h28v100H92Zm438 0v-100h28v72h91v28H530Zm219 0v-28h91v-72h28v100H749ZM530-648v-100h119v28h-91v72h-28Zm310 0v-72h-91v-28h119v100h-28ZM120-240v-480 480Zm553-126-20-20 82-80H239v-28h496l-82-80 20-20 116 114-116 114Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccess2W100.displayName = 'AmauiIconMaterialSwitchAccess2W100';

export default IconMaterialSwitchAccess2W100;
