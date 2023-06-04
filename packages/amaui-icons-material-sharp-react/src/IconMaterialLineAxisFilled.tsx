import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineAxisFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxisFilled'

      short_name='LineAxis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 19 2 17.5 9.5 10l4 4 1.675-1.9-5.6-5.175L3.5 13 2 11.5 9.5 4l7.1 6.525L20.6 6 22 7.4l-3.95 4.45L22 15.5 20.5 17l-3.85-3.55L13.5 17l-4-4Z"/>
    </Icon>
  );
});

IconMaterialLineAxisFilled.displayName = 'AmauiIconMaterialLineAxisFilled';

export default IconMaterialLineAxisFilled;
