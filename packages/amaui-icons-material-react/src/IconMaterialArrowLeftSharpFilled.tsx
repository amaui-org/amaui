import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftSharpFilled'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M14 17 9 12 14 7Z"/>
    </Icon>
  )
});

export default IconMaterialArrowLeftSharpFilled;
