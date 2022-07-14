import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownSharpW100Filled'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M6.3 19.7V10H7v9h9v.7Zm3.7-3.675v-9.7h.7v9h9v.7Z"/>
    </Icon>
  );
});

export default IconMaterialArrowsMoreDownSharpW100Filled;
