import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamW100Filled'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.925 18.7V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Z"/>
    </Icon>
  );
});

IconMaterialVideocamW100Filled.displayName = 'AmauiIconMaterialVideocamW100Filled';

export default IconMaterialVideocamW100Filled;
