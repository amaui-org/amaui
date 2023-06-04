import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendToMobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobile'

      short_name='SendToMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 16-1.4-1.4 1.55-1.6H12v-2h5.15L15.6 9.4 17 8l4 4Zm0 4H7v1h10Zm0-16V3H7v1ZM5 23V1h14v6h-2V6H7v12h10v-1h2v6ZM7 3v1Zm0 18v-1Z"/>
    </Icon>
  );
});

IconMaterialSendToMobile.displayName = 'AmauiIconMaterialSendToMobile';

export default IconMaterialSendToMobile;
