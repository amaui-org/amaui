import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterNoneSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneSharpW100Filled'
      short_name='FilterNone'

      {...props}
    >
      <path d="M6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  )
});

export default IconMaterialFilterNoneSharpW100Filled;
