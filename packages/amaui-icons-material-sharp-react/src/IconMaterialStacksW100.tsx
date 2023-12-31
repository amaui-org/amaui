import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStacksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StacksW100'

      short_name='Stacks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-432 93-630l387-198 388 198-388 198Zm0 150L116-468l29-16 335 170 336-170 29 16-365 186Zm0 150L116-318l29-16 335 170 336-170 29 16-365 186Zm0-332 330-166-330-166-329 166 329 166Zm1-166Z"/>
    </Icon>
  );
});

IconMaterialStacksW100.displayName = 'AmauiIconMaterialStacksW100';

export default IconMaterialStacksW100;
