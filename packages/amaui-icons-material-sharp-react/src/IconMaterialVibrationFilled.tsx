import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVibrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationFilled'

      short_name='Vibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 15V9h2v6Zm3 2V7h2v10Zm19-2V9h2v6Zm-3 2V7h2v10ZM6 21V3h12v18Z"/>
    </Icon>
  );
});

IconMaterialVibrationFilled.displayName = 'AmauiIconMaterialVibrationFilled';

export default IconMaterialVibrationFilled;
