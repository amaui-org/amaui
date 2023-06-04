import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookW100'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4ZM6 20h12V4h-2v5.85l-1.85-1.1-1.85 1.1V4H6Zm6.3-16H16ZM6 4h12H6Z"/>
    </Icon>
  );
});

IconMaterialBookW100.displayName = 'AmauiIconMaterialBookW100';

export default IconMaterialBookW100;
