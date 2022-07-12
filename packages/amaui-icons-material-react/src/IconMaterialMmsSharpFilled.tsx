import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsSharpFilled'
      short_name='Mms'

      {...props}
    >
      <path d="M6 14H18L14.25 9L11.25 13L9 10ZM2 22V2H22V18H6Z"/>
    </Icon>
  )
});

export default IconMaterialMmsSharpFilled;
