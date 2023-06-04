import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRedoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoW100'

      short_name='Redo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.025 18.35q-2.125 0-3.687-1.388-1.563-1.387-1.563-3.462t1.563-3.463Q7.9 8.65 10.025 8.65h7.85l-3.25-3.25.5-.5 4.1 4.1-4.1 4.1-.5-.5 3.25-3.25h-7.85q-1.85 0-3.2 1.175T5.475 13.5q0 1.8 1.35 2.975t3.2 1.175h6.45v.7Z"/>
    </Icon>
  );
});

IconMaterialRedoW100.displayName = 'AmauiIconMaterialRedoW100';

export default IconMaterialRedoW100;
