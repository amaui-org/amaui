import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockW100'

      short_name='KeyboardCapslock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 17.35v-.7h10.7v.7Zm.75-5.25-.5-.5L12 6.5l5.1 5.1-.5.5L12 7.5Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockW100.displayName = 'AmauiIconMaterialKeyboardCapslockW100';

export default IconMaterialKeyboardCapslockW100;
