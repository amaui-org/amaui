import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockFilled'

      short_name='KeyboardCapslock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18v-2h12v2Zm1.4-5L6 11.6l6-6 6 6-1.4 1.4L12 8.4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockFilled.displayName = 'AmauiIconMaterialKeyboardCapslockFilled';

export default IconMaterialKeyboardCapslockFilled;
