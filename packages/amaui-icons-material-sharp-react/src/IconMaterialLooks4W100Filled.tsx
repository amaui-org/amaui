import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4W100Filled'

      short_name='Looks4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm9.35-3.35h.7v-8.7h-.7v4h-3.3v-4h-.7v4.7h4Z"/>
    </Icon>
  );
});

IconMaterialLooks4W100Filled.displayName = 'AmauiIconMaterialLooks4W100Filled';

export default IconMaterialLooks4W100Filled;
