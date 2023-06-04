import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewW100'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 21.1 6.9 12 16 2.9l.85.85L8.6 12l8.25 8.25Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewW100.displayName = 'AmauiIconMaterialArrowBackIosNewW100';

export default IconMaterialArrowBackIosNewW100;
