import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAltW100Filled'

      short_name='ScreenRotationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.6 20.975 6.25 13.65h1L13.6 20l5.975-5.975H16.05v-.7h4.7v4.7h-.7V14.5ZM3.25 10.65v-4.7h.7v3.525L10.4 3l7.35 7.325h-1l-6.35-6.35L4.425 9.95H7.95v.7Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationAltW100Filled.displayName = 'AmauiIconMaterialScreenRotationAltW100Filled';

export default IconMaterialScreenRotationAltW100Filled;
