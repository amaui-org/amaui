import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchW100'

      short_name='Pinch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.4 10.6V6.4h.7v3.025L9.425 2.1H6.4v-.7h4.2v4.2h-.7V2.575L2.575 9.9H5.6v.7Zm11.975 11.1-4.5-4.45.75-.75 3.8.75V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Zm.3-.7h6.4l.95-5.425-4.15-2.075h-1.75v-6q0-.225-.137-.363Q14.85 7 14.625 7q-.225 0-.363.137-.137.138-.137.363v10.6l-4.25-.85Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialPinchW100.displayName = 'AmauiIconMaterialPinchW100';

export default IconMaterialPinchW100;
