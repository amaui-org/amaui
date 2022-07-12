import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCommentRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentRoundedFilled'
      short_name='ModeComment'

      {...props}
    >
      <path d="M20.3 20.3 18 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V19.575Q22 20.25 21.388 20.512Q20.775 20.775 20.3 20.3Z"/>
    </Icon>
  )
});

export default IconMaterialModeCommentRoundedFilled;
