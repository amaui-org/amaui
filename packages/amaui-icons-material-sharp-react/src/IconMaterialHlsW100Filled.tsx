import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsW100Filled'

      short_name='Hls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5H4.1v2.5Zm12.5 0V13h.7v.9h2.8v-1.55h-3.5V9.4h4.2V11h-.7v-.9h-2.8v1.55h3.5v2.95Zm-5.6 0V9.4h.7v4.5h2.8v.7Z"/>
    </Icon>
  );
});

IconMaterialHlsW100Filled.displayName = 'AmauiIconMaterialHlsW100Filled';

export default IconMaterialHlsW100Filled;
