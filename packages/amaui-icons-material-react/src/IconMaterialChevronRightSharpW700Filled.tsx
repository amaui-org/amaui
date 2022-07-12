import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronRightSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRightSharpW700Filled'
      short_name='ChevronRight'

      {...props}
    >
      <path d="M9.4 18.8 7.2 16.6 11.8 12 7.2 7.4 9.4 5.2 16.2 12Z"/>
    </Icon>
  )
});

export default IconMaterialChevronRightSharpW700Filled;
