import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownOutlinedW100'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M12 14.1 8.55 10.65H15.45Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropDownOutlinedW100;
