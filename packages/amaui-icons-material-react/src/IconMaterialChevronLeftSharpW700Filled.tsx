import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronLeftSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftSharpW700Filled'
      short_name='ChevronLeft'

      {...props}
    >
      <path d="M14 18.8 7.2 12 14 5.2 16.2 7.4 11.6 12 16.2 16.6Z"/>
    </Icon>
  )
});

export default IconMaterialChevronLeftSharpW700Filled;
