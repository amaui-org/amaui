import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownSharpFilled'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M12 15 7 10H17Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropDownSharpFilled;
