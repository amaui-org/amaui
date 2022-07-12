import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandMoreOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreOutlinedW700'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M12 16.15 5.2 9.35 7.4 7.15 12 11.75 16.6 7.15 18.8 9.35Z"/>
    </Icon>
  )
});

export default IconMaterialExpandMoreOutlinedW700;
