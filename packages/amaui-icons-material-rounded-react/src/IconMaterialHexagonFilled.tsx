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
      <path d="M7.95 21q-.55 0-1-.262-.45-.263-.725-.738l-4.05-7q-.125-.225-.2-.475Q1.9 12.275 1.9 12t.075-.525q.075-.25.2-.475l4.05-7q.275-.475.725-.738Q7.4 3 7.95 3h8.1q.55 0 1 .262.45.263.725.738l4.05 7q.125.225.2.475.075.25.075.525t-.075.525q-.075.25-.2.475l-4.05 7q-.275.475-.725.738-.45.262-1 .262Z"/>
    </Icon>
  );
});

IconMaterialHexagonFilled.displayName = 'AmauiIconMaterialHexagonFilled';

export default IconMaterialHexagonFilled;
