import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus1'

      short_name='StatMinus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialStatMinus1.displayName = 'AmauiIconMaterialStatMinus1';

export default IconMaterialStatMinus1;
