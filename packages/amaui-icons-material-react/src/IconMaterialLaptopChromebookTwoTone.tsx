import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookTwoTone'
      short_name='LaptopChromebook'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 5h16v10H4z" opacity=".3"/><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>
    </Icon>
  )
});

export default IconMaterialLaptopChromebookTwoTone;
