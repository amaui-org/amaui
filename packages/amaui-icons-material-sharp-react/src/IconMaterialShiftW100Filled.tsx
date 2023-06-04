import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftW100Filled'

      short_name='Shift'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 884V604H230l250-346 250 346H588v280H372Z"/>
    </Icon>
  );
});

IconMaterialShiftW100Filled.displayName = 'AmauiIconMaterialShiftW100Filled';

export default IconMaterialShiftW100Filled;
