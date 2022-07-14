import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseTwoTone'
      short_name='Pause'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 5h4v14H6zm8 0h4v14h-4z"/>
    </Icon>
  );
});

export default IconMaterialPauseTwoTone;
