import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOffW100Filled'

      short_name='MailOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M825-95 708-212H132v-536h80l28 28h-40l-81-81 20-20 706 706-20 20Zm3-149L544-528l256-170-16-22-260 172-200-200h504v504Z"/>
    </Icon>
  );
});

IconMaterialMailOffW100Filled.displayName = 'AmauiIconMaterialMailOffW100Filled';

export default IconMaterialMailOffW100Filled;
