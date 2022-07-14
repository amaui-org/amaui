import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipNextTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextTwoTone'
      short_name='SkipNext'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 9.86v4.28L11.03 12z" opacity=".3"/><path d="M14.5 12L6 6v12l8.5-6zM8 9.86L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>
    </Icon>
  );
});

export default IconMaterialSkipNextTwoTone;
