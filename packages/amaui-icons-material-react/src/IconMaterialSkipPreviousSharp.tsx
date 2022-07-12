import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousSharp'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M5.5 18V6H7.5V18ZM18.5 18 9.5 12 18.5 6ZM16.5 12ZM16.5 14.25V9.75L13.1 12Z"/>
    </Icon>
  )
});

export default IconMaterialSkipPreviousSharp;
