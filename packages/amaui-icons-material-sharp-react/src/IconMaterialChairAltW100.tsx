import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltW100'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 19.45V12.3h2.35v-2.1H6.8V5.05h10.4v5.15h-2.35v2.1h2.35v7.15h-.7v-3h-9v3Zm.7-9.95h9V5.75h-9Zm2.35 2.8h4.3v-2.1h-4.3ZM7.5 15.75h9V13h-9Zm0-6.25V5.75 9.5Zm0 6.25V13v2.75Z"/>
    </Icon>
  );
});

IconMaterialChairAltW100.displayName = 'AmauiIconMaterialChairAltW100';

export default IconMaterialChairAltW100;
