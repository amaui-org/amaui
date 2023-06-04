import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPentagon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pentagon'

      short_name='Pentagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.45 19h9.1l3.075-9.225L12 4.45 4.375 9.775Zm0 2q-.65 0-1.175-.375t-.725-1l-3.075-9.2q-.2-.65 0-1.275.2-.625.75-1L10.85 2.8q.275-.2.563-.275.287-.075.587-.075t.588.075q.287.075.562.275l7.625 5.35q.55.375.75 1 .2.625 0 1.275l-3.075 9.2q-.2.625-.725 1Q17.2 21 16.55 21ZM12 11.725Z"/>
    </Icon>
  );
});

IconMaterialPentagon.displayName = 'AmauiIconMaterialPentagon';

export default IconMaterialPentagon;
