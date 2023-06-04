import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUpW100Filled'

      short_name='MoveUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19.35q-2.65 0-4.5-1.85T1.65 13q0-2.825 2.088-4.6 2.087-1.775 4.987-1.775l-1.95-1.95q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.3 2.3q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.3 2.3q-.1.1-.237.113-.138.012-.263-.088-.125-.125-.125-.263 0-.137.125-.262l2-1.975q-2.875.075-4.65 1.625Q2.35 10.525 2.35 13q0 2.35 1.65 4t4 1.65h2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm6.35 0q-.275 0-.487-.212-.213-.213-.213-.488v-4.3q0-.275.213-.488.212-.212.487-.212h6.3q.275 0 .488.212.212.213.212.488v4.3q0 .275-.212.488-.213.212-.488.212Zm0-.7h6.3v-4.3h-6.3Zm0-8.3q-.275 0-.487-.213-.213-.212-.213-.487v-4.3q0-.275.213-.488.212-.212.487-.212h6.3q.275 0 .488.212.212.213.212.488v4.3q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialMoveUpW100Filled.displayName = 'AmauiIconMaterialMoveUpW100Filled';

export default IconMaterialMoveUpW100Filled;
