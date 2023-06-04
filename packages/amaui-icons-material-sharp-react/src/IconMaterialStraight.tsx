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
      <path d="M11 21V6.825L9.4 8.4 8 7l4-4 4 4-1.4 1.4L13 6.825V21Z"/>
    </Icon>
  );
});

IconMaterialStraight.displayName = 'AmauiIconMaterialStraight';

export default IconMaterialStraight;
