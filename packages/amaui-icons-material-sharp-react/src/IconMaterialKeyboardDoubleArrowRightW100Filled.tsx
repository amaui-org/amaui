import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowRightW100Filled'

      short_name='KeyboardDoubleArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.725 17.1-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Zm5.95 0-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowRightW100Filled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowRightW100Filled';

export default IconMaterialKeyboardDoubleArrowRightW100Filled;
