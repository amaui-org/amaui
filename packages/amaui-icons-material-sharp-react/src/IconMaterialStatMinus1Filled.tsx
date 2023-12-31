import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus1Filled'

      short_name='StatMinus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialStatMinus1Filled.displayName = 'AmauiIconMaterialStatMinus1Filled';

export default IconMaterialStatMinus1Filled;
