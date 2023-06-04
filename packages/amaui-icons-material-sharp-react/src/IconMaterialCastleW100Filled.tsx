import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleW100Filled'

      short_name='Castle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 20.35V9.65h.7v2h3.3v-8h.7v2h3.3v-2h.7v2h3.3v-2h.7v2h3.3v-2h.7v8h3.3v-2h.7v10.7h-7.7v-5h-5.3v5Zm8-9h.7V9.4h-.7Zm4 0h.7V9.4h-.7Z"/>
    </Icon>
  );
});

IconMaterialCastleW100Filled.displayName = 'AmauiIconMaterialCastleW100Filled';

export default IconMaterialCastleW100Filled;
