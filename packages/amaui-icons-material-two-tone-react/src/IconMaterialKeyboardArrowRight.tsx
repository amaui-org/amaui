import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowRight'

      short_name='KeyboardArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowRight.displayName = 'AmauiIconMaterialKeyboardArrowRight';

export default IconMaterialKeyboardArrowRight;
