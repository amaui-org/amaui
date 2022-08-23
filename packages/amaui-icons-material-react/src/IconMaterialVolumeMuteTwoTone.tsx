import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteTwoTone'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 13h2.83L14 15.17V8.83L11.83 11H9z" opacity=".3"/><path d="M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteTwoTone.displayName = 'AmauiIconMaterialVolumeMuteTwoTone';

export default IconMaterialVolumeMuteTwoTone;
