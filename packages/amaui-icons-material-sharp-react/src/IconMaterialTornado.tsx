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
      <path d="M1 3h22L12 22Zm3.475 2L6.2 8h11.6l1.725-3Zm2.9 5L9.1 13h5.8l1.725-3Zm2.9 5L12 18l1.725-3Z"/>
    </Icon>
  );
});

IconMaterialTornado.displayName = 'AmauiIconMaterialTornado';

export default IconMaterialTornado;
