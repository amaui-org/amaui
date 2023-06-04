import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowLeftW100'

      short_name='KeyboardArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 17.1 8.9 12 14 6.9l.5.5L9.9 12l4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowLeftW100.displayName = 'AmauiIconMaterialKeyboardArrowLeftW100';

export default IconMaterialKeyboardArrowLeftW100;
