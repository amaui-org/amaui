import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowLeftW100Filled'

      short_name='KeyboardDoubleArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.325 17.1-5.1-5.1 5.1-5.1.5.5-4.6 4.6 4.6 4.6Zm5.95 0-5.1-5.1 5.1-5.1.5.5-4.6 4.6 4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowLeftW100Filled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowLeftW100Filled';

export default IconMaterialKeyboardDoubleArrowLeftW100Filled;
