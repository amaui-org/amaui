import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownSharpW700Filled'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M12 15.8 5.625 9.425H18.375Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropDownSharpW700Filled;
