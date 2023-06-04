import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Straight'

      short_name='Straight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="11,6.83 9.41,8.41 8,7 12,3 16,7 14.59,8.41 13,6.83 13,21 11,21"/></g>
    </Icon>
  );
});

IconMaterialStraight.displayName = 'AmauiIconMaterialStraight';

export default IconMaterialStraight;
