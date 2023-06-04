import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTab = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tab'

      short_name='Tab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/>
    </Icon>
  );
});

IconMaterialTab.displayName = 'AmauiIconMaterialTab';

export default IconMaterialTab;
