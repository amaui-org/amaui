import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRight'

      short_name='SwitchRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)" width="24"/><polyline opacity=".3" points="15.5,15.38 15.5,8.62 18.88,12 15.5,15.38"/><path d="M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z"/>
    </Icon>
  );
});

IconMaterialSwitchRight.displayName = 'AmauiIconMaterialSwitchRight';

export default IconMaterialSwitchRight;
