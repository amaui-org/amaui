import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandAwarenessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandAwarenessW100Filled'

      short_name='BrandAwareness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-466v-28h120v28H622Zm42 252-96-72 18-22 96 72-18 22Zm-82-442-18-22 96-72 18 22-96 72ZM178-412v-136h130l126-126v388L308-412H178Z"/>
    </Icon>
  );
});

IconMaterialBrandAwarenessW100Filled.displayName = 'AmauiIconMaterialBrandAwarenessW100Filled';

export default IconMaterialBrandAwarenessW100Filled;
