import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransitEnterexitTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitTwoTone'
      short_name='TransitEnterexit'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z"/>
    </Icon>
  )
});

export default IconMaterialTransitEnterexitTwoTone;
