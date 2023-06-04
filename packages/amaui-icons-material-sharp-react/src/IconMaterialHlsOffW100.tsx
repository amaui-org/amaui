import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsOffW100'

      short_name='HlsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.425 14.6 15.9 13.075V13h.7v.775l.125.125H19.4v-1.65h-3.5V9.4h4.2V11h-.7v-.9h-2.8v1.65h3.5v2.85ZM3.4 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5H4.1v2.5Zm16.45 6.25L3.15 4.15l.5-.5 16.7 16.7ZM10.3 14.6v-3.8l.7.7v2.4h2.4l.7.7Z"/>
    </Icon>
  );
});

IconMaterialHlsOffW100.displayName = 'AmauiIconMaterialHlsOffW100';

export default IconMaterialHlsOffW100;
