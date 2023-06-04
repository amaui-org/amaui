import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorHighW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighW100'

      short_name='EdgesensorHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 13.35v-5.7h.7v5.7Zm-2.7 3v-5.7h.7v5.7Zm20-3v-5.7h.7v5.7Zm-2.7 3v-5.7h.7v5.7ZM7.05 20.7V3.3h9.9v17.4Zm.7-3.05h8.5V6.35h-8.5Zm0-12h8.5V4h-8.5Zm0 14.35h8.5v-1.65h-8.5Zm0-14.35V4v1.65Zm0 14.35v-1.65V20Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighW100.displayName = 'AmauiIconMaterialEdgesensorHighW100';

export default IconMaterialEdgesensorHighW100;
