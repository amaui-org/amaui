import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionTopRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightW100Filled'

      short_name='PositionTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M410 454h248q13 0 21.5-8.5T688 424v-8q0-13-8.5-21.5T658 386H410q-13 0-21.5 8.5T380 416v8q0 13 8.5 21.5T410 454ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightW100Filled.displayName = 'AmauiIconMaterialPositionTopRightW100Filled';

export default IconMaterialPositionTopRightW100Filled;
