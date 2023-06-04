import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapW100Filled'

      short_name='Map'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 19.6-6-2.1-4.7 1.825V6L9 4.4l6 2.1 4.7-1.825v13.4Zm-.35-.85V7.05L9.35 5.2v11.7Z"/>
    </Icon>
  );
});

IconMaterialMapW100Filled.displayName = 'AmauiIconMaterialMapW100Filled';

export default IconMaterialMapW100Filled;
