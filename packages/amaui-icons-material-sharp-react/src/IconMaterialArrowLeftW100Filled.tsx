import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftW100Filled'

      short_name='ArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.35 15.45 9.9 12l3.45-3.45Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftW100Filled.displayName = 'AmauiIconMaterialArrowLeftW100Filled';

export default IconMaterialArrowLeftW100Filled;
