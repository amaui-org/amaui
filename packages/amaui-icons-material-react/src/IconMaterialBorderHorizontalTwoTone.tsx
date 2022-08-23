import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderHorizontalTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontalTwoTone'
      short_name='BorderHorizontal'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 3h2v2h-2zm8 0h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm4 12h2v2H7zm4-12h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm12 16h2v2h-2zm-4 0h2v2h-2zm8-4h2v2h-2zm0 4h2v2h-2zm-8-4h2v2h-2zm-8-4h18v2H3z"/>
    </Icon>
  );
});

IconMaterialBorderHorizontalTwoTone.displayName = 'AmauiIconMaterialBorderHorizontalTwoTone';

export default IconMaterialBorderHorizontalTwoTone;
