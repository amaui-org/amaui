import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowW100'

      short_name='EdgesensorLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 20.7V3.3h9.9v17.4Zm.7-3.05h8.5V6.35h-8.5Zm0-12h8.5V4h-8.5Zm0 14.35h8.5v-1.65h-8.5Zm-3.4-6.65v-5.7h.7v5.7Zm14.6 3v-5.7h.7v5.7ZM7.75 5.65V4v1.65Zm0 14.35v-1.65V20Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowW100.displayName = 'AmauiIconMaterialEdgesensorLowW100';

export default IconMaterialEdgesensorLowW100;
