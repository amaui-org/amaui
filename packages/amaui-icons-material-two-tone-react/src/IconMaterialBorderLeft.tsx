import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeft'

      short_name='BorderLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 3h2v2h-2zM3 3h2v18H3zm12 0h2v2h-2zm-4 16h2v2h-2zm0-4h2v2h-2zm4 4h2v2h-2zM11 7h2v2h-2zm0 4h2v2h-2zm8 4h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm-8 8h2v2H7zm0-8h2v2H7zm0-8h2v2H7z"/>
    </Icon>
  );
});

IconMaterialBorderLeft.displayName = 'AmauiIconMaterialBorderLeft';

export default IconMaterialBorderLeft;
