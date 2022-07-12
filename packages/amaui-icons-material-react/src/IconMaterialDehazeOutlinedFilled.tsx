import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDehazeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeOutlinedFilled'
      short_name='Dehaze'

      {...props}
    >
      <path d="M2 18V16H22V18ZM2 13V11H22V13ZM2 8V6H22V8Z"/>
    </Icon>
  )
});

export default IconMaterialDehazeOutlinedFilled;
