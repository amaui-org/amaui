import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMmsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsFilled'

      short_name='Mms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h12l-3.75-5-3 4L9 10Zm-4 8V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialMmsFilled.displayName = 'AmauiIconMaterialMmsFilled';

export default IconMaterialMmsFilled;
