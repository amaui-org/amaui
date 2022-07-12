import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownOutlined'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M12 15 7 10H17Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropDownOutlined;
