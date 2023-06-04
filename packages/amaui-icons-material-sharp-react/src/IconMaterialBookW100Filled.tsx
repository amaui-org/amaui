import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookW100Filled'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4Zm7-16.7v5.85l1.85-1.1L16 9.85V4Z"/>
    </Icon>
  );
});

IconMaterialBookW100Filled.displayName = 'AmauiIconMaterialBookW100Filled';

export default IconMaterialBookW100Filled;
