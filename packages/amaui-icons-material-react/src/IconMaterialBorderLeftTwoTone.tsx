import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderLeftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeftTwoTone'
      short_name='BorderLeft'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 3h2v2h-2zM3 3h2v18H3zm12 0h2v2h-2zm-4 16h2v2h-2zm0-4h2v2h-2zm4 4h2v2h-2zM11 7h2v2h-2zm0 4h2v2h-2zm8 4h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm-8 8h2v2H7zm0-8h2v2H7zm0-8h2v2H7z"/>
    </Icon>
  );
});

export default IconMaterialBorderLeftTwoTone;
