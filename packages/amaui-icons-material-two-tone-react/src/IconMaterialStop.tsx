import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stop'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 8h8v8H8z" opacity=".3"/><path d="M6 18h12V6H6v12zM8 8h8v8H8V8z"/>
    </Icon>
  );
});

IconMaterialStop.displayName = 'AmauiIconMaterialStop';

export default IconMaterialStop;
