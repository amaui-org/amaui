import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3SharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3SharpW700'
      short_name='Man3'

      {...props}
    >
      <path d="M9.225 22.525v-6.9h-2V7.05h9.55v8.575h-2v6.9ZM12 6.3 9.375 3.675 12 1.05l2.625 2.625Z"/>
    </Icon>
  )
});

export default IconMaterialMan3SharpW700;
