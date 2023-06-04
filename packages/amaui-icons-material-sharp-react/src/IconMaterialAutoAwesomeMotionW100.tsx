import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionW100'

      short_name='AutoAwesomeMotion'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 13V3.3H13V4H4v9Zm4 4V7.3H17V8H8v9Zm13.4 3.7h-9.4v-9.4h9.4ZM20 20v-8h-8v8Zm-8-8v8Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMotionW100.displayName = 'AmauiIconMaterialAutoAwesomeMotionW100';

export default IconMaterialAutoAwesomeMotionW100;
