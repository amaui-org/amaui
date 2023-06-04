import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightModeW100'

      short_name='LightMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 .7q-1.55 0-2.625-1.075T8.3 12q0-1.55 1.075-2.625T12 8.3q1.55 0 2.625 1.075T15.7 12q0 1.55-1.075 2.625T12 15.7ZM1.65 12.35v-.7H5v.7Zm17.35 0v-.7h3.35v.7ZM11.65 5V1.65h.7V5Zm0 17.35V19h.7v3.35ZM6.8 7.3 4.775 5.275l.5-.5L7.3 6.8Zm11.925 11.925L16.7 17.2l.5-.5 2.025 2.025ZM17.2 7.3l-.5-.5 2.025-2.025.5.5ZM5.275 19.225l-.5-.5L6.8 16.7l.5.5ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialLightModeW100.displayName = 'AmauiIconMaterialLightModeW100';

export default IconMaterialLightModeW100;
