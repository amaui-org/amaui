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
      <path d="M7.15 11.85q-.125-.125-.125-.25t.125-.25l4.325-4.325q.125-.125.263-.175.137-.05.262-.05.15 0 .275.05.125.05.25.175l4.325 4.325q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L12 7.5l-4.35 4.35q-.125.125-.25.125t-.25-.125ZM7 17.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockW100.displayName = 'AmauiIconMaterialKeyboardCapslockW100';

export default IconMaterialKeyboardCapslockW100;
