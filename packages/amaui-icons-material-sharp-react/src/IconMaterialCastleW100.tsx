import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleW100'

      short_name='Castle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 20.35V9.65h.7v2h3.3v-8h.7v2h3.3v-2h.7v2h3.3v-2h.7v2h3.3v-2h.7v8h3.3v-2h.7v10.7h-7.7v-5h-5.3v5Zm.7-.7h6.3v-5h6.7v5h6.3v-7.3h-4v-6H6.35v6h-4Zm7.3-8.3h.7V9.4h-.7Zm4 0h.7V9.4h-.7ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialCastleW100.displayName = 'AmauiIconMaterialCastleW100';

export default IconMaterialCastleW100;
