import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book4W100Filled'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132q-33 0-56.5-22.425T172-210v-538q0-33.333 23-56.667Q218-828 252-828h348q24.75 0 42.375 17.625T660-768v448q0 24.75-17.625 42.375T600-260H252q-22.1 0-37.05 15Q200-230 200-209.5t14.95 35Q229.9-160 252-160h476q14 0 23-9t9-23v-542q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v542q0 24.75-17.625 42.375T728-132H252Zm62.035-156q5.965 0 9.965-4.025t4-9.975v-484q0-5.95-4.035-9.975-4.035-4.025-10-4.025T304-795.975q-4 4.025-4 9.975v484q0 5.95 4.035 9.975 4.035 4.025 10 4.025Z"/>
    </Icon>
  );
});

IconMaterialBook4W100Filled.displayName = 'AmauiIconMaterialBook4W100Filled';

export default IconMaterialBook4W100Filled;
