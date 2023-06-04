import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCo2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2'

      short_name='Co2'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M14,9h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-4C15,9.45,14.55,9,14,9z M13.5,13.5h-2v-3h2V13.5z M8,13v1c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H6.5v-0.5h-2v3h2V13H8z M20.5,15.5h-2 v1h3V18H17v-2.5c0-0.55,0.45-1,1-1h2v-1h-3V12h3.5c0.55,0,1,0.45,1,1v1.5C21.5,15.05,21.05,15.5,20.5,15.5z"/>
    </Icon>
  );
});

IconMaterialCo2.displayName = 'AmauiIconMaterialCo2';

export default IconMaterialCo2;
