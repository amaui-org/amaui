import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosOutlinedFilled'
      short_name='ArrowBackIos'

      {...props}
    >
      <path d="M10 22 0 12 10 2 11.775 3.775 3.55 12 11.775 20.225Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackIosOutlinedFilled;
