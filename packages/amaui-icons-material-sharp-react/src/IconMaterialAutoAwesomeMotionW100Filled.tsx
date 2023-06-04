import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionW100Filled'

      short_name='AutoAwesomeMotion'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 13V3.3H13V4H4v9Zm4 4V7.3H17V8H8v9Zm13.4 3.7h-9.4v-9.4h9.4Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionW100Filled.displayName = 'AmauiIconMaterialAutoAwesomeMotionW100Filled';

export default IconMaterialAutoAwesomeMotionW100Filled;
