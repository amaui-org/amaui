import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditAttributesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAttributesW100'

      short_name='EditAttributes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15.7q-1.55 0-2.625-1.075T3.3 12q0-1.55 1.075-2.625T7 8.3h10q1.55 0 2.625 1.075T20.7 12q0 1.55-1.075 2.625T17 15.7Zm0-.7h10q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15Zm1.05-1.3L11 10.75l-.5-.5-2.45 2.45-.95-.95-.5.5ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialEditAttributesW100.displayName = 'AmauiIconMaterialEditAttributesW100';

export default IconMaterialEditAttributesW100;
