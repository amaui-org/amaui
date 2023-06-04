import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowRightW100Filled'

      short_name='KeyboardArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 17.1-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowRightW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowRightW100Filled';

export default IconMaterialKeyboardArrowRightW100Filled;
