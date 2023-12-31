import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHallwayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HallwayFilled'

      short_name='Hallway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-720h200l160-160 160 160h200v720H120Zm120-160h480L570-440 450-280l-90-120-120 160Zm164-560h152l-76-76-76 76Z"/>
    </Icon>
  );
});

IconMaterialHallwayFilled.displayName = 'AmauiIconMaterialHallwayFilled';

export default IconMaterialHallwayFilled;
