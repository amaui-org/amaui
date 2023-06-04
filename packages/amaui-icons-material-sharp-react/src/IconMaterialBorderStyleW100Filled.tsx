import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderStyleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleW100Filled'

      short_name='BorderStyle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-17h17v1h-16v16Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleW100Filled.displayName = 'AmauiIconMaterialBorderStyleW100Filled';

export default IconMaterialBorderStyleW100Filled;
