import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus3Filled'

      short_name='StatMinus3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-83 240-323l56-56 184 183 184-183 56 56L480-83Zm0-238L240-561l56-56 184 183 184-183 56 56-240 240Zm0-238L240-799l56-56 184 183 184-183 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialStatMinus3Filled.displayName = 'AmauiIconMaterialStatMinus3Filled';

export default IconMaterialStatMinus3Filled;
