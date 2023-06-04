import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottom'

      short_name='BorderBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 11h2v2H3zm0 4h2v2H3zm0 4h18v2H3zm16-4h2v2h-2zM3 7h2v2H3zm16 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm4-4h2v2h-2zm-4-4h2v2h-2zm-8 8h2v2H7zM3 3h2v2H3zm8 4h2v2h-2zM7 3h2v2H7zm4 8h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialBorderBottom.displayName = 'AmauiIconMaterialBorderBottom';

export default IconMaterialBorderBottom;
