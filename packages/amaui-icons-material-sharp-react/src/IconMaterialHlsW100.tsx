import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsW100'

      short_name='Hls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5H4.1v2.5Zm12.5 0V13h.7v.9h2.8v-1.65h-3.5V9.4h4.2V11h-.7v-.9h-2.8v1.65h3.5v2.85Zm-5.6 0V9.4h.7v4.5h2.8v.7Z"/>
    </Icon>
  );
});

IconMaterialHlsW100.displayName = 'AmauiIconMaterialHlsW100';

export default IconMaterialHlsW100;
