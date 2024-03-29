import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngleupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleupFilled'

      short_name='TextRotationAngleup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.725 21.7-1.4-1.4 9.3-9.3h-1.6V9h5v5h-2v-1.6Zm-1.5-5.6L3.375 5.4l1.4-1.4 10.7 4.9-1.35 1.35-2.65-1.3-3.15 3.15 1.25 2.65Zm-.65-5.55 2.35-2.3-4.35-2.1-.05.05Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleupFilled.displayName = 'AmauiIconMaterialTextRotationAngleupFilled';

export default IconMaterialTextRotationAngleupFilled;
