import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownOutlinedW100'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M6.3 19.7V10H7v9h9v.7ZM10 16V6.3h.7v9h9v.7Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreDownOutlinedW100;
