import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomRightW100'

      short_name='PositionBottomRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M410 766h248q13 0 21.5-8.5T688 736v-8q0-13-8.5-21.5T658 698H410q-13 0-21.5 8.5T380 728v8q0 13 8.5 21.5T410 766ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomRightW100.displayName = 'AmauiIconMaterialPositionBottomRightW100';

export default IconMaterialPositionBottomRightW100;
