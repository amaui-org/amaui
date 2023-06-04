import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDown'

      short_name='MoreDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19V8h2v9h9v2Zm5-5V3h2v9h9v2Z"/>
    </Icon>
  );
});

IconMaterialMoreDown.displayName = 'AmauiIconMaterialMoreDown';

export default IconMaterialMoreDown;
