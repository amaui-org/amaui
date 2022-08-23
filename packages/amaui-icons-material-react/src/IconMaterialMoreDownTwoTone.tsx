import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownTwoTone'
      short_name='MoreDown'

      {...props}
    >
      <path d="M5 19V8h2v9h9v2Zm5-5V3h2v9h9v2Z"/>
    </Icon>
  );
});

IconMaterialMoreDownTwoTone.displayName = 'AmauiIconMaterialMoreDownTwoTone';

export default IconMaterialMoreDownTwoTone;
