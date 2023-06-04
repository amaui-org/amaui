import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightLeftW100Filled'

      short_name='TurnSlightLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 19.35q-.15 0-.25-.1t-.1-.25v-6.55q0-.15-.05-.288-.05-.137-.175-.262L7.35 5.825v2.85q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.4q0-.325.213-.538.212-.212.537-.212h3.275q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.85l6.075 6.075q.2.2.325.487.125.288.125.588V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightLeftW100Filled.displayName = 'AmauiIconMaterialTurnSlightLeftW100Filled';

export default IconMaterialTurnSlightLeftW100Filled;
