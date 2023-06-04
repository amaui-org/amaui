import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterFilled'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 13V6h6V2h8v4h6v7h-7v-2H9v2Zm8-7h4V4h-4Zm1 9v-2h2v2Zm-9 6v-6h7v2h6v-2h7v6Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterFilled.displayName = 'AmauiIconMaterialBusinessCenterFilled';

export default IconMaterialBusinessCenterFilled;
