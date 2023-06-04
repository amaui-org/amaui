import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopLeftW100Filled'

      short_name='ArrowTopLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M706 870V470H250l169 169-19 20-203-203 203-203 19 19-168 170h483v428h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowTopLeftW100Filled.displayName = 'AmauiIconMaterialArrowTopLeftW100Filled';

export default IconMaterialArrowTopLeftW100Filled;
