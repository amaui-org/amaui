import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRight'

      short_name='BorderRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h2v2H3zm0 16h2v2H3zM15 3h2v2h-2zm0 16h2v2h-2zm0-8h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm8 8h2v2h-2zm-4-4h2v2H7zm0-8h2v2H7zm12 0h2v18h-2zM7 19h2v2H7zm4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialBorderRight.displayName = 'AmauiIconMaterialBorderRight';

export default IconMaterialBorderRight;
