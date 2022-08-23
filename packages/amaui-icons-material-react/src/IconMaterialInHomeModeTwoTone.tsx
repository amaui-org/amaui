import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInHomeModeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeModeTwoTone'
      short_name='InHomeMode'

      {...props}
    >
      <path d="M4 20V10H1l11-9 11 9h-3v1h-2V8.475l-6-4.9-6 4.9V18h2v2Zm10.2 2L10 17.8l1.4-1.4 2.8 2.8 5.9-5.9 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialInHomeModeTwoTone.displayName = 'AmauiIconMaterialInHomeModeTwoTone';

export default IconMaterialInHomeModeTwoTone;
