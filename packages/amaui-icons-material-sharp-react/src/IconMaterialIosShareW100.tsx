import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIosShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareW100'

      short_name='IosShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15.35V4.55L9.4 6.8l-.5-.5L12 3.2l3.1 3.1-.5.5-2.25-2.25v10.8ZM5.3 21.7V9.3h3.35v.7H6v11h12V10h-2.65v-.7h3.35v12.4Z"/>
    </Icon>
  );
});

IconMaterialIosShareW100.displayName = 'AmauiIconMaterialIosShareW100';

export default IconMaterialIosShareW100;
