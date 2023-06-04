import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDualScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenFilled'

      short_name='DualScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M210 874q-23-9-36.5-29T160 800V256q0-42 35-65.5t75-8.5l238 95q23 9 37.5 29.5T560 352v544q0 42-35 66t-75 8l-240-96Zm430-18V352q0-67-54-108.5T467 176h253q33 0 56.5 23.5T800 256v520q0 33-23.5 56.5T720 856h-80Z"/>
    </Icon>
  );
});

IconMaterialDualScreenFilled.displayName = 'AmauiIconMaterialDualScreenFilled';

export default IconMaterialDualScreenFilled;
