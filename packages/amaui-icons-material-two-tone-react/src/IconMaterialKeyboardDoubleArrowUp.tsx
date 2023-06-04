import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUp'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59"/><polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"/></g></g>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUp.displayName = 'AmauiIconMaterialKeyboardDoubleArrowUp';

export default IconMaterialKeyboardDoubleArrowUp;
