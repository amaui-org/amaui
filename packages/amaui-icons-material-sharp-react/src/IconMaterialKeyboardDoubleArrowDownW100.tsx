import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowDownW100'

      short_name='KeyboardDoubleArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 18.05-5.1-5.1.5-.5 4.6 4.6 4.6-4.6.5.5Zm0-5.95L6.9 7l.5-.5 4.6 4.6 4.6-4.6.5.5Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDownW100.displayName = 'AmauiIconMaterialKeyboardDoubleArrowDownW100';

export default IconMaterialKeyboardDoubleArrowDownW100;
