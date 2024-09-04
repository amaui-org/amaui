import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOffW100'

      short_name='MailOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480Zm136-16ZM825-95 708-212H132v-536h80l28 28h-80v480h520L119-801l20-20 706 706-20 20Zm3-149-28-28v-426L544-528l-21-21 261-171H352l-28-28h504v504Z"/>
    </Icon>
  );
});

IconMaterialMailOffW100.displayName = 'AmauiIconMaterialMailOffW100';

export default IconMaterialMailOffW100;
