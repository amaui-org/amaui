import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalMallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallW100Filled'

      short_name='LocalMall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V7.3h4q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3h4v13.4ZM9 7.3h6q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3Zm3 5.4q1.55 0 2.625-1.075T15.7 9H15q0 1.25-.875 2.125T12 12q-1.25 0-2.125-.875T9 9h-.7q0 1.55 1.075 2.625T12 12.7Z"/>
    </Icon>
  );
});

IconMaterialLocalMallW100Filled.displayName = 'AmauiIconMaterialLocalMallW100Filled';

export default IconMaterialLocalMallW100Filled;
