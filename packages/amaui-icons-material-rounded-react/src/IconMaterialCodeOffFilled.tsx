import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffFilled'

      short_name='CodeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.075 21.9 7 9.85l-2.175 2.175 3.9 3.9Q9 16.2 9 16.6t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-4.6-4.6q-.3-.3-.3-.7 0-.4.3-.7l2.875-2.875-3.5-3.5Q1.8 4.65 1.8 4.237q0-.412.3-.712t.712-.3q.413 0 .713.3L20.5 20.5q.275.275.288.688.012.412-.288.712t-.712.3q-.413 0-.713-.3Zm-.65-6.325L17 14.15l2.175-2.175-3.9-3.9Q15 7.8 15 7.4t.3-.7q.275-.275.7-.275.425 0 .7.275l4.6 4.6q.3.3.3.7 0 .4-.3.7Z"/>
    </Icon>
  );
});

IconMaterialCodeOffFilled.displayName = 'AmauiIconMaterialCodeOffFilled';

export default IconMaterialCodeOffFilled;
