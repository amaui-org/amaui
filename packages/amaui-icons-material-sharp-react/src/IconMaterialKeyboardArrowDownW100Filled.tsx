import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownW100Filled'

      short_name='KeyboardArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.5 6.9 9.4l.5-.5 4.6 4.6 4.6-4.6.5.5Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowDownW100Filled';

export default IconMaterialKeyboardArrowDownW100Filled;
