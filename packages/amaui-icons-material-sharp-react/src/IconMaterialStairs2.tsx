import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairs2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs2'

      short_name='Stairs2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z"/>
    </Icon>
  );
});

IconMaterialStairs2.displayName = 'AmauiIconMaterialStairs2';

export default IconMaterialStairs2;
