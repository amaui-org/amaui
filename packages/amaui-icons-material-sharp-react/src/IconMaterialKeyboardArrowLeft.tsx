import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowLeft'

      short_name='KeyboardArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowLeft.displayName = 'AmauiIconMaterialKeyboardArrowLeft';

export default IconMaterialKeyboardArrowLeft;
