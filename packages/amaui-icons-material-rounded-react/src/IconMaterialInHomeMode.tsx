import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInHomeMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeMode'

      short_name='InHomeMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V10H1l11-9 11 9h-3v1h-2V8.475l-6-4.9-6 4.9V18h2v2Zm10.2 2L10 17.8l1.4-1.4 2.8 2.8 5.9-5.9 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialInHomeMode.displayName = 'AmauiIconMaterialInHomeMode';

export default IconMaterialInHomeMode;
