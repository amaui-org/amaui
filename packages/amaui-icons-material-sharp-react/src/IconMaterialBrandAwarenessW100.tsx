import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandAwarenessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandAwarenessW100'

      short_name='BrandAwareness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-466v-28h120v28H622Zm42 252-96-72 18-22 96 72-18 22Zm-82-442-18-22 96-72 18 22-96 72ZM178-412v-136h130l126-126v388L308-412H178Zm228-194-86 86H206v80h114l86 86v-252ZM306-480Z"/>
    </Icon>
  );
});

IconMaterialBrandAwarenessW100.displayName = 'AmauiIconMaterialBrandAwarenessW100';

export default IconMaterialBrandAwarenessW100;
