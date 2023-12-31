import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStacksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StacksW100Filled'

      short_name='Stacks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-432 93-630l387-198 388 198-388 198Zm0 150L116-468l29-16 335 170 336-170 29 16-365 186Zm0 150L116-318l29-16 335 170 336-170 29 16-365 186Z"/>
    </Icon>
  );
});

IconMaterialStacksW100Filled.displayName = 'AmauiIconMaterialStacksW100Filled';

export default IconMaterialStacksW100Filled;
