import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallLamp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLamp'

      short_name='WallLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20v-4q0-.425.288-.713Q3.575 15 4 15t.713.287Q5 15.575 5 16v4q0 .425-.287.712Q4.425 21 4 21Zm4.35-10h9.3l-1.8-6h-5.7Zm0 0h9.3ZM7 19q-.425 0-.713-.288Q6 18.425 6 18t.287-.712Q6.575 17 7 17h4q.425 0 .713-.288Q12 16.425 12 16v-3H7q-.5 0-.8-.387-.3-.388-.15-.888l2.4-8q.1-.325.35-.525.25-.2.6-.2h7.2q.35 0 .6.2t.35.525l2.4 8q.15.5-.15.888-.3.387-.8.387h-5v3q0 1.25-.875 2.125T11 19Z"/>
    </Icon>
  );
});

IconMaterialWallLamp.displayName = 'AmauiIconMaterialWallLamp';

export default IconMaterialWallLamp;
