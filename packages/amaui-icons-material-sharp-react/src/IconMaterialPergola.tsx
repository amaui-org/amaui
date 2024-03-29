import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPergola = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pergola'

      short_name='Pergola'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3q0-.375.275-.688Q3.55 2 4 2q.45 0 .725.312Q5 2.625 5 3v1h14V3q0-.375.312-.688Q19.625 2 20 2q.375 0 .688.312Q21 2.625 21 3v18h-2V10H5v11ZM5 8h14V6H5Zm6 13v-3H8v-2h8v2h-3v3ZM5 6h14Z"/>
    </Icon>
  );
});

IconMaterialPergola.displayName = 'AmauiIconMaterialPergola';

export default IconMaterialPergola;
