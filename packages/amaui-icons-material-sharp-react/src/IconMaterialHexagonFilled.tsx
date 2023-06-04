import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHexagonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonFilled'

      short_name='Hexagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.8 21-5.2-9 5.2-9h10.4l5.2 9-5.2 9Z"/>
    </Icon>
  );
});

IconMaterialHexagonFilled.displayName = 'AmauiIconMaterialHexagonFilled';

export default IconMaterialHexagonFilled;
