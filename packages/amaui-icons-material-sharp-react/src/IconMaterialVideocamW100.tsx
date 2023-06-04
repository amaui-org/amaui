import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamW100'

      short_name='Videocam'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.925 18.7V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Zm.7-.7h12V6h-12Zm0-12v12Z"/>
    </Icon>
  );
});

IconMaterialVideocamW100.displayName = 'AmauiIconMaterialVideocamW100';

export default IconMaterialVideocamW100;
