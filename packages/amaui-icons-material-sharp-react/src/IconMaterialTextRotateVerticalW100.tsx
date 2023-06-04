import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalW100'

      short_name='TextRotateVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.85 16.55 3.85-10.1h.7l3.75 10.1h-.75l-1.05-2.85h-4.7l-1.05 2.85Zm2.05-3.5h4.2l-2-5.5H16ZM6.05 18.1l-2.6-2.6.5-.5 1.75 1.65v-11h.7v11L8.15 15l.5.5Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalW100.displayName = 'AmauiIconMaterialTextRotateVerticalW100';

export default IconMaterialTextRotateVerticalW100;
