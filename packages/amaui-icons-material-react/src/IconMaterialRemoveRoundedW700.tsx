import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoundedW700'
      short_name='Remove'

      {...props}
    >
      <path d="M6 13.575Q5.35 13.575 4.888 13.112Q4.425 12.65 4.425 12Q4.425 11.35 4.888 10.887Q5.35 10.425 6 10.425H18Q18.65 10.425 19.113 10.887Q19.575 11.35 19.575 12Q19.575 12.65 19.113 13.112Q18.65 13.575 18 13.575Z"/>
    </Icon>
  )
});

export default IconMaterialRemoveRoundedW700;
