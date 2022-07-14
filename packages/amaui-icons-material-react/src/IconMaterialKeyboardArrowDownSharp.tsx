import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownSharp'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M12 15.4 6 9.4 7.4 8 12 12.6 16.6 8 18 9.4Z"/>
    </Icon>
  );
});

export default IconMaterialKeyboardArrowDownSharp;
