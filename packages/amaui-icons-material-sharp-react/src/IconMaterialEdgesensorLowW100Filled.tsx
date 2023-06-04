import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowW100Filled'

      short_name='EdgesensorLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 20.7V3.3h9.9v17.4Zm.7-3.05h8.5V6.35h-8.5Zm-3.4-4.3v-5.7h.7v5.7Zm14.6 3v-5.7h.7v5.7Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowW100Filled.displayName = 'AmauiIconMaterialEdgesensorLowW100Filled';

export default IconMaterialEdgesensorLowW100Filled;
