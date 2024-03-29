import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOff'

      short_name='PersonOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 17.15 20H4v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.125-.575 2.288-.925 1.162-.35 2.362-.525L1.375 4.225 2.8 2.8l18.4 18.4ZM6 18h9.15l-3-3H12q-1.4 0-2.775.337-1.375.338-2.725 1.013-.225.125-.362.35-.138.225-.138.5Zm12.4-3.45q.725.35 1.15 1.063.425.712.45 1.537l-3.35-3.35q.45.175.888.35.437.175.862.4Zm-4.2-3.2-1.475-1.475q.575-.225.925-.738Q14 8.625 14 8q0-.825-.587-1.412Q12.825 6 12 6q-.625 0-1.137.35-.513.35-.738.925L8.65 5.8q.575-.85 1.45-1.325T12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.025-.475 1.9T14.2 11.35Zm.95 6.65H6h9.15Zm-3.725-9.425Z"/>
    </Icon>
  );
});

IconMaterialPersonOff.displayName = 'AmauiIconMaterialPersonOff';

export default IconMaterialPersonOff;
