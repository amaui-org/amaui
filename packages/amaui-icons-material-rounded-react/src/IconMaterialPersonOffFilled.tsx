import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffFilled'

      short_name='PersonOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.425 0-.713-.288Q4 19.425 4 19v-1.8q0-.85.438-1.563.437-.712 1.162-1.087 1.125-.575 2.288-.925 1.162-.35 2.362-.525L2.075 4.925q-.3-.3-.287-.7.012-.4.312-.7.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3L17.15 20Zm15-2.85-3.35-3.35q.45.175.888.35.437.175.862.4.725.35 1.15 1.063.425.712.45 1.537Zm-5.8-5.8L8.65 5.8q.575-.85 1.45-1.325T12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.025-.475 1.9T14.2 11.35Z"/>
    </Icon>
  );
});

IconMaterialPersonOffFilled.displayName = 'AmauiIconMaterialPersonOffFilled';

export default IconMaterialPersonOffFilled;
