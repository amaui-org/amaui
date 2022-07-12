import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCommentOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentOutlinedFilled'
      short_name='ModeComment'

      {...props}
    >
      <path d="M22 22 18 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4Z"/>
    </Icon>
  )
});

export default IconMaterialModeCommentOutlinedFilled;
