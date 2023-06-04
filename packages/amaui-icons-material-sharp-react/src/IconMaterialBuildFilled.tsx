import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBuildFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildFilled'

      short_name='Build'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.875 21.425 11.1 14.6q-.5.2-1.012.3Q9.575 15 9 15q-2.5 0-4.25-1.75T3 9q0-.9.25-1.713.25-.812.7-1.537L7.6 9.4l1.8-1.8-3.65-3.65q.725-.45 1.537-.7Q8.1 3 9 3q2.5 0 4.25 1.75T15 9q0 .575-.1 1.087-.1.513-.3 1.013l6.825 6.775Z"/>
    </Icon>
  );
});

IconMaterialBuildFilled.displayName = 'AmauiIconMaterialBuildFilled';

export default IconMaterialBuildFilled;
