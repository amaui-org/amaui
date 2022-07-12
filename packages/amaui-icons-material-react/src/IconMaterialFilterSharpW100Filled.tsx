import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterSharpW100Filled'
      short_name='Filter'

      {...props}
    >
      <path d="M9.2 13.6H17.5L14.95 10.2L12.45 13.3L10.85 11.45ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  )
});

export default IconMaterialFilterSharpW100Filled;
