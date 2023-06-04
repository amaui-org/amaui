import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorHighW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighW100Filled'

      short_name='EdgesensorHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 13.35v-5.7h.7v5.7Zm-2.7 3v-5.7h.7v5.7Zm20-3v-5.7h.7v5.7Zm-2.7 3v-5.7h.7v5.7ZM7.05 20.7V3.3h9.9v17.4Zm.7-3.05h8.5V6.35h-8.5Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighW100Filled.displayName = 'AmauiIconMaterialEdgesensorHighW100Filled';

export default IconMaterialEdgesensorHighW100Filled;
