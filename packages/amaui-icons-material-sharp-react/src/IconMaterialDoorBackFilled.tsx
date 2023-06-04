import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorBackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackFilled'

      short_name='DoorBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2V3h14v16h2v2Zm7-8q.425 0 .713-.288Q11 12.425 11 12t-.287-.713Q10.425 11 10 11t-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13Z"/>
    </Icon>
  );
});

IconMaterialDoorBackFilled.displayName = 'AmauiIconMaterialDoorBackFilled';

export default IconMaterialDoorBackFilled;
