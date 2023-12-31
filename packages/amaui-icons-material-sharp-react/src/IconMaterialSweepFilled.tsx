import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSweepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SweepFilled'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240v-80h240v80H400Zm-158 0L14-467.799 71-525l171 171 366.865-367L666-664 242-240Zm318-160v-80h240v80H560Zm160-160v-80h240v80H720Z"/>
    </Icon>
  );
});

IconMaterialSweepFilled.displayName = 'AmauiIconMaterialSweepFilled';

export default IconMaterialSweepFilled;
