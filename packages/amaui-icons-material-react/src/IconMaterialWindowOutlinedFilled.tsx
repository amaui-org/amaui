import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOutlinedFilled'
      short_name='Window'

      {...props}
    >
      <path d="M13 11V2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V11ZM13 22V13H22V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM2 11V4Q2 3.175 2.588 2.587Q3.175 2 4 2H11V11ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V13H11V22Z"/>
    </Icon>
  )
});

export default IconMaterialWindowOutlinedFilled;
