import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckedBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagW100Filled'

      short_name='CheckedBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M324-312v-356h68q0-36 26-62t62-26q36 0 62 26t26 62h68v356H324Zm96-356h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm244 356v-356h84v356h-84Zm-452 0v-356h84v356h-84Zm-60 108v-28h656v28H152Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagW100Filled.displayName = 'AmauiIconMaterialCheckedBagW100Filled';

export default IconMaterialCheckedBagW100Filled;
