import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownOutlinedW100Filled'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M12 14.1 8.55 10.65H15.45Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropDownOutlinedW100Filled;
