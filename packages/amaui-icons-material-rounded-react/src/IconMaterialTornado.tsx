import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTornado = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tornado'

      short_name='Tornado'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.475 3h15.05q1.175 0 1.738 1 .562 1-.013 2l-7.525 13Q13.15 20 12 20q-1.15 0-1.725-1L2.75 6q-.575-1-.012-2Q3.3 3 4.475 3Zm0 2L6.2 8h11.6l1.725-3H4.475Zm2.9 5L9.1 13h5.8l1.725-3Zm2.9 5L12 18l1.725-3Z"/>
    </Icon>
  );
});

IconMaterialTornado.displayName = 'AmauiIconMaterialTornado';

export default IconMaterialTornado;
