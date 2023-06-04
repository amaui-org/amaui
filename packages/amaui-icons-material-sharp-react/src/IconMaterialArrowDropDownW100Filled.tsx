import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownW100Filled'

      short_name='ArrowDropDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 14.1-3.45-3.45h6.9Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownW100Filled.displayName = 'AmauiIconMaterialArrowDropDownW100Filled';

export default IconMaterialArrowDropDownW100Filled;
