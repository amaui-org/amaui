import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInfoIFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoIFilled'

      short_name='InfoI'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-33 0-56.5-23.5T400-760q0-33 23.5-56.5T480-840q33 0 56.5 23.5T560-760q0 33-23.5 56.5T480-680Zm-60 560v-480h120v480H420Z"/>
    </Icon>
  );
});

IconMaterialInfoIFilled.displayName = 'AmauiIconMaterialInfoIFilled';

export default IconMaterialInfoIFilled;
