import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOutlinedFilled'
      short_name='Repeat'

      {...props}
    >
      <path d="M7 22 3 18 7 14 8.4 15.45 6.85 17H17V13H19V19H6.85L8.4 20.55ZM5 11V5H17.15L15.6 3.45L17 2L21 6L17 10L15.6 8.55L17.15 7H7V11Z"/>
    </Icon>
  )
});

export default IconMaterialRepeatOutlinedFilled;
