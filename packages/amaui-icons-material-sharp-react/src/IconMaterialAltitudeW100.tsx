import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltitudeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeW100'

      short_name='Altitude'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.65 12V6.9L16.4 9.125l-.475-.475L19 5.575l3.075 3.075-.475.5-2.25-2.25V12ZM3.475 19.625l3.65-4.9 3.15 4.2h8.85l-5-6.65-3.15 4.2-.45-.6 3.6-4.8 6.4 8.55Zm7.5-.7Z"/>
    </Icon>
  );
});

IconMaterialAltitudeW100.displayName = 'AmauiIconMaterialAltitudeW100';

export default IconMaterialAltitudeW100;
