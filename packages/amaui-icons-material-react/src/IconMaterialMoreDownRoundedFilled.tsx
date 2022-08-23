import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownRoundedFilled'
      short_name='MoreDown'

      {...props}
    >
      <path d="M5 19V8h2v9h9v2Zm5-5V3h2v9h9v2Z"/>
    </Icon>
  );
});

IconMaterialMoreDownRoundedFilled.displayName = 'AmauiIconMaterialMoreDownRoundedFilled';

export default IconMaterialMoreDownRoundedFilled;
