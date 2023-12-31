import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHallwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HallwayW100Filled'

      short_name='Hallway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h134l93-93q9-9 21-9t21 9l93 93h134q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm216-146-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109Zm-42-470h148l-74-74-74 74Z"/>
    </Icon>
  );
});

IconMaterialHallwayW100Filled.displayName = 'AmauiIconMaterialHallwayW100Filled';

export default IconMaterialHallwayW100Filled;
