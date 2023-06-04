import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkOffW100Filled'

      short_name='PhonelinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.525 5.95-.7-.7h12.4v.7Zm11.95 11.95-.7-.7V9.65h-4v3.55l-.7-.7V8.95h5.4Zm-.75 3.1-2.6-2.6h-2.05v-2.05L5.725 7v10.35h5.35v1.05h-8.05v-1.05h2V6.3l-2.1-2.1.5-.5 16.8 16.8Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkOffW100Filled.displayName = 'AmauiIconMaterialPhonelinkOffW100Filled';

export default IconMaterialPhonelinkOffW100Filled;
