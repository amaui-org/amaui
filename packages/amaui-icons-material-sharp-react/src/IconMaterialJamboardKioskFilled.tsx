import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJamboardKioskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JamboardKioskFilled'

      short_name='JamboardKiosk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80h200v-120H80v-520h800v520H520v120h200v80H240Z"/>
    </Icon>
  );
});

IconMaterialJamboardKioskFilled.displayName = 'AmauiIconMaterialJamboardKioskFilled';

export default IconMaterialJamboardKioskFilled;
