import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowRightFilled'

      short_name='KeyboardDoubleArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 18 5 16.6 9.575 12 5 7.4 6.4 6l6 6Zm6.6 0-1.4-1.4 4.575-4.6L11.6 7.4 13 6l6 6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowRightFilled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowRightFilled';

export default IconMaterialKeyboardDoubleArrowRightFilled;
