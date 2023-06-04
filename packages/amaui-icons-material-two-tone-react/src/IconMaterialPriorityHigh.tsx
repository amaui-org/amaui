import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriorityHigh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHigh'

      short_name='PriorityHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
    </Icon>
  );
});

IconMaterialPriorityHigh.displayName = 'AmauiIconMaterialPriorityHigh';

export default IconMaterialPriorityHigh;
