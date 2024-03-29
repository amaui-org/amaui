import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBakeryDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDining'

      short_name='BakeryDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 18Zm8.075-1.05.85-.85-1.45-2.7-1.05 2.7Zm-5-.95h1.2l2.55-6.325-3.1-1.225Zm-7.4 0h1.2l-.65-7.55-3.1 1.225Zm-3.8.95 1.65-.85-1.05-2.7-1.45 2.7Zm7-.95h2.2l.8-9h-3.8Zm-7.375 3.425-2.9-2.9L3.5 11l-.95-2.425 5.5-2.2L7.925 5h8.125l-.1 1.375 5.5 2.2-.95 2.375 2.9 5.55-2.875 2.875L17.7 18H6.25Z"/>
    </Icon>
  );
});

IconMaterialBakeryDining.displayName = 'AmauiIconMaterialBakeryDining';

export default IconMaterialBakeryDining;
