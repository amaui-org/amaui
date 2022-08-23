import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopTwoTone'
      short_name='Stop'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 8h8v8H8z" opacity=".3"/><path d="M6 18h12V6H6v12zM8 8h8v8H8V8z"/>
    </Icon>
  );
});

IconMaterialStopTwoTone.displayName = 'AmauiIconMaterialStopTwoTone';

export default IconMaterialStopTwoTone;
