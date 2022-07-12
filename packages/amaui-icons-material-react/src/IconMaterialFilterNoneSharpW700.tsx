import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterNoneSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneSharpW700'
      short_name='FilterNone'

      {...props}
    >
      <path d="M5.725 18.275V0.575H23.425V18.275ZM8.875 15.125H20.275V3.725H8.875ZM0.575 23.425V5.725H3.725V20.275H18.275V23.425ZM8.875 3.725V15.125Z"/>
    </Icon>
  )
});

export default IconMaterialFilterNoneSharpW700;
