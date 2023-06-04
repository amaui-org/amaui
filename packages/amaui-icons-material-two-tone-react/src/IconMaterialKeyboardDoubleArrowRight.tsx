import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowRight'

      short_name='KeyboardDoubleArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"/><polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"/></g></g>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowRight.displayName = 'AmauiIconMaterialKeyboardDoubleArrowRight';

export default IconMaterialKeyboardDoubleArrowRight;
