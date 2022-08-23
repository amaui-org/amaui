import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFiberPinSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinSharpW100Filled'
      short_name='FiberPin'

      {...props}
    >
      <path d="M14.3 14.6H15V10.55L17.75 14.6H18.5V9.4H17.8V13.45L15.1 9.4H14.3ZM11.4 14.6H12.1V9.4H11.4ZM5.5 14.6H6.2V12.5H9.7V9.4H5.5ZM6.2 11.8V10.1H9V11.8ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialFiberPinSharpW100Filled.displayName = 'AmauiIconMaterialFiberPinSharpW100Filled';

export default IconMaterialFiberPinSharpW100Filled;
