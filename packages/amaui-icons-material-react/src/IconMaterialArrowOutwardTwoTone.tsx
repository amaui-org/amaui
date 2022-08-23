import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowOutwardTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardTwoTone'
      short_name='ArrowOutward'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="6,6 6,8 14.59,8 5,17.59 6.41,19 16,9.41 16,18 18,18 18,6"/></g>
    </Icon>
  );
});

IconMaterialArrowOutwardTwoTone.displayName = 'AmauiIconMaterialArrowOutwardTwoTone';

export default IconMaterialArrowOutwardTwoTone;
