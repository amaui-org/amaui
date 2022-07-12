import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewTwoTone'
      short_name='ArrowBackIosNew'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><g><polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/></g>
    </Icon>
  )
});

export default IconMaterialArrowBackIosNewTwoTone;
