import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackHexagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackHexagonW100Filled'

      short_name='StackHexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M253-140q-25 3-44.5-12T186-192l-48-374q-3-25 12.5-45.5T191-634l37-2v268q0 58 41 99t99 41h366q2 11-5.5 19.5T710-198l-457 58Zm115-168q-26 0-43-17t-17-43v-400q0-26 17-43t43-17h400q26 0 43 17t17 43v400q0 26-17 43t-43 17H368Zm185-117q7 4 15 4t15-4l102-58q7-4 11-11t4-15v-118q0-8-4-15t-11-11l-102-58q-7-4-15-4t-15 4l-102 58q-7 4-11 11t-4 15v118q0 8 4 15t11 11l102 58Z"/>
    </Icon>
  );
});

IconMaterialStackHexagonW100Filled.displayName = 'AmauiIconMaterialStackHexagonW100Filled';

export default IconMaterialStackHexagonW100Filled;
