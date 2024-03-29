import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFilled'

      short_name='Camera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.2 8.375 3.5-6q2.275.6 4.038 2.2 1.762 1.6 2.562 3.8Zm-2.775 2.5L5 4.875q1.35-1.325 3.138-2.1Q9.925 2 12 2q.325 0 .75.037.425.038.775.088Zm-6.1 3.625q-.15-.6-.237-1.225Q2 12.65 2 12q0-1.775.575-3.35Q3.15 7.075 4.2 5.775L9.25 14.5Zm7 7.125q-2.275-.6-4.05-2.2t-2.575-3.8h10.075ZM12 22q-.375 0-.762-.05-.388-.05-.738-.1l5.075-8.725 3.425 6q-1.35 1.325-3.137 2.1Q14.075 22 12 22Zm7.8-3.775L14.75 9.5h6.925q.15.6.238 1.225Q22 11.35 22 12q0 1.75-.612 3.35-.613 1.6-1.588 2.875Z"/>
    </Icon>
  );
});

IconMaterialCameraFilled.displayName = 'AmauiIconMaterialCameraFilled';

export default IconMaterialCameraFilled;
