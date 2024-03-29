import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltFilled'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.275 21q-.45 0-.912-.163-.463-.162-.738-.437L5.75 16.325q-.275-.275-.287-.7-.013-.425.212-.75.175-.25.475-.363.3-.112.675-.012l3.25.75V4.5q0-.625.438-1.062Q10.95 3 11.575 3t1.063.438q.437.437.437 1.062v6h.9q.2 0 .45.05t.45.15l4.1 2.05q.575.275.875.862.3.588.2 1.213l-.625 4.45q-.125.75-.675 1.237-.55.488-1.3.488Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltFilled.displayName = 'AmauiIconMaterialPanToolAltFilled';

export default IconMaterialPanToolAltFilled;
