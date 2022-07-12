import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterSharpW700Filled'
      short_name='Filter'

      {...props}
    >
      <path d="M9.575 13.425H19.575L16.125 8.925L13.825 11.925L12.275 9.925ZM5.725 18.275V0.575H23.425V18.275ZM0.575 23.425V5.725H3.725V20.275H18.275V23.425Z"/>
    </Icon>
  )
});

export default IconMaterialFilterSharpW700Filled;
