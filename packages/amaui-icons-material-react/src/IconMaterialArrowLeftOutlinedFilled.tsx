import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftOutlinedFilled'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M14 17 9 12 14 7Z"/>
    </Icon>
  )
});

export default IconMaterialArrowLeftOutlinedFilled;
