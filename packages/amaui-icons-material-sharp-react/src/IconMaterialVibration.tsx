import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVibration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vibration'

      short_name='Vibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 15V9h2v6Zm3 2V7h2v10Zm19-2V9h2v6Zm-3 2V7h2v10ZM6 21V3h12v18Zm2-2h8V5H8ZM8 5v14Z"/>
    </Icon>
  );
});

IconMaterialVibration.displayName = 'AmauiIconMaterialVibration';

export default IconMaterialVibration;
