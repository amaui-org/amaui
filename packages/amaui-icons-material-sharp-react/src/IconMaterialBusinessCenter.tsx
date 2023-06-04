import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenter'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6h6V2h8v4h6v15Zm8-15h4V4h-4Zm10 9h-5v2H9v-2H4v4h16Zm-9 0h2v-2h-2Zm-7-2h5v-2h6v2h5V8H4Zm8 1Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenter.displayName = 'AmauiIconMaterialBusinessCenter';

export default IconMaterialBusinessCenter;
