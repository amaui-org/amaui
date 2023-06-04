import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceFilled'

      short_name='KeyboardBackspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 18-6-6 6-6 1.4 1.4L6.8 11H21v2H6.8l3.6 3.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceFilled.displayName = 'AmauiIconMaterialKeyboardBackspaceFilled';

export default IconMaterialKeyboardBackspaceFilled;
