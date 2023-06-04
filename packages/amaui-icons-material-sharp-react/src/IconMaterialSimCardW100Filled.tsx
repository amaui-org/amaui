import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardW100Filled'

      short_name='SimCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 18.5h.7v-1.25h-.7Zm8 0h.7v-1.25h-.7Zm-8-3.75h.7V11.5h-.7Zm4 3.75h.7v-3.25h-.7Zm0-5.75h.7V11.5h-.7Zm4 2h.7V11.5h-.7ZM5.3 20.7V8.55l5.25-5.25h8.15v17.4Z"/>
    </Icon>
  );
});

IconMaterialSimCardW100Filled.displayName = 'AmauiIconMaterialSimCardW100Filled';

export default IconMaterialSimCardW100Filled;
