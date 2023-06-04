import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeft'

      short_name='SwitchLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polyline opacity=".3" points="8.5,8.62 8.5,15.38 5.12,12 8.5,8.62"/><path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M10,5l-7,7l7,7V5L10,5z M14,5v14l7-7L14,5z"/>
    </Icon>
  );
});

IconMaterialSwitchLeft.displayName = 'AmauiIconMaterialSwitchLeft';

export default IconMaterialSwitchLeft;
