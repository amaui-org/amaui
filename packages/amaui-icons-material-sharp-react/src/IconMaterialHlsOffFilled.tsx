import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsOffFilled'

      short_name='HlsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.825 15-2-2H17v.5h2v-1h-3.5V9h5v2H19v-.5h-2v1h3.5V15ZM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15Zm16.775 7.6L1.4 4.225 2.8 2.8l18.375 18.4ZM10 15v-3.575l1.5 1.5v.575h.6l1.5 1.5Z"/>
    </Icon>
  );
});

IconMaterialHlsOffFilled.displayName = 'AmauiIconMaterialHlsOffFilled';

export default IconMaterialHlsOffFilled;
