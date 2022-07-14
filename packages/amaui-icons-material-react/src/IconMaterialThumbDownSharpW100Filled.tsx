import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbDownSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownSharpW100Filled'
      short_name='ThumbDown'

      {...props}
    >
      <path d="M9.6 20.65 9.025 20.075 10.1 14.7H0.6V14L4.7 4.3H15.65V14.7ZM18.15 14.175H22.5V4.3H18.15Z"/>
    </Icon>
  );
});

export default IconMaterialThumbDownSharpW100Filled;
