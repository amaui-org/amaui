import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairs2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs2W100'

      short_name='Stairs2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-28h222.5v-214H577v-214h251v28H605.5v214H383v214H132Z"/>
    </Icon>
  );
});

IconMaterialStairs2W100.displayName = 'AmauiIconMaterialStairs2W100';

export default IconMaterialStairs2W100;
