import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfPositionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionW100'

      short_name='ShelfPosition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h536q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-174v114q0 12 10 22t22 10h536q12 0 22-10t10-22V710H200Zm460-28h140V328q0-12-10-22t-22-10H660v386Zm-460 0h140V296H232q-12 0-22 10t-10 22v354Zm168 0h264V296H368v386Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionW100.displayName = 'AmauiIconMaterialShelfPositionW100';

export default IconMaterialShelfPositionW100;
