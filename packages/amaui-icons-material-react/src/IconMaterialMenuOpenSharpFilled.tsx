import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuOpenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenSharpFilled'
      short_name='MenuOpen'

      {...props}
    >
      <path d="M3 18V16H16V18ZM3 13V11H13V13ZM3 8V6H16V8ZM19.6 17 14.6 12 19.6 7 21 8.4 17.4 12 21 15.6Z"/>
    </Icon>
  )
});

export default IconMaterialMenuOpenSharpFilled;
