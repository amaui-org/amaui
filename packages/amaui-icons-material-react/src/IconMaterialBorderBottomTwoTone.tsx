import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderBottomTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomTwoTone'
      short_name='BorderBottom'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 11h2v2H3zm0 4h2v2H3zm0 4h18v2H3zm16-4h2v2h-2zM3 7h2v2H3zm16 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm4-4h2v2h-2zm-4-4h2v2h-2zm-8 8h2v2H7zM3 3h2v2H3zm8 4h2v2h-2zM7 3h2v2H7zm4 8h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialBorderBottomTwoTone.displayName = 'AmauiIconMaterialBorderBottomTwoTone';

export default IconMaterialBorderBottomTwoTone;
