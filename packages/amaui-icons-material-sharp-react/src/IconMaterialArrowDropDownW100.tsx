import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownW100'

      short_name='ArrowDropDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 14.1-3.45-3.45h6.9Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownW100.displayName = 'AmauiIconMaterialArrowDropDownW100';

export default IconMaterialArrowDropDownW100;
