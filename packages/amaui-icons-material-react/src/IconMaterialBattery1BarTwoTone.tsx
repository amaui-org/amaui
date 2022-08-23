import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery1BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarTwoTone'
      short_name='Battery1Bar'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><rect height="12" opacity=".3" width="6" x="9" y="6"/><path d="M17,5v16c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h2V2h4v2h2C16.55,4,17,4.45,17,5z M15,6H9v12h6V6z"/></g>
    </Icon>
  );
});

IconMaterialBattery1BarTwoTone.displayName = 'AmauiIconMaterialBattery1BarTwoTone';

export default IconMaterialBattery1BarTwoTone;
