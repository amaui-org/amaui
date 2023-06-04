import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderInner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInner'

      short_name='BorderInner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h2v2H3zM3 3h2v2H3zm0 16h2v2H3zm8 2h2v-8h8v-2h-8V3h-2v8H3v2h8zm-4-2h2v2H7zm12-4h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm16 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialBorderInner.displayName = 'AmauiIconMaterialBorderInner';

export default IconMaterialBorderInner;
