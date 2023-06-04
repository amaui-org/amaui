import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledW100Filled'

      short_name='PlayDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.9 13.05-5.6-5.6v-.1L16.6 12ZM17.05 19l-4.45-4.45-3.3 2.1v-5.4L4.95 6.9l.5-.5 12.1 12.1Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledW100Filled.displayName = 'AmauiIconMaterialPlayDisabledW100Filled';

export default IconMaterialPlayDisabledW100Filled;
