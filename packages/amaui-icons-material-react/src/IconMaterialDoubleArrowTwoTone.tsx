import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoubleArrowTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowTwoTone'
      short_name='DoubleArrow'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12"/><polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12"/></g></g>
    </Icon>
  );
});

IconMaterialDoubleArrowTwoTone.displayName = 'AmauiIconMaterialDoubleArrowTwoTone';

export default IconMaterialDoubleArrowTwoTone;
