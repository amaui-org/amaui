import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRedoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoW100Filled'

      short_name='Redo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.025 18.35q-2.125 0-3.687-1.388-1.563-1.387-1.563-3.462t1.563-3.463Q7.9 8.65 10.025 8.65h7.85l-3-3q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125L18.7 8.475q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-3.325 3.325q-.1.1-.238.112-.137.013-.262-.112t-.125-.25q0-.125.125-.25l3-3h-7.85q-1.85 0-3.2 1.175T5.475 13.5q0 1.8 1.35 2.975t3.2 1.175h6.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRedoW100Filled.displayName = 'AmauiIconMaterialRedoW100Filled';

export default IconMaterialRedoW100Filled;
