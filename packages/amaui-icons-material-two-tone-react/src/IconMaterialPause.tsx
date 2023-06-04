import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPause = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pause'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 5h4v14H6zm8 0h4v14h-4z"/>
    </Icon>
  );
});

IconMaterialPause.displayName = 'AmauiIconMaterialPause';

export default IconMaterialPause;
