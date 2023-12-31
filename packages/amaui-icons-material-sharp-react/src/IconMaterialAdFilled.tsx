import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdFilled'

      short_name='Ad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-440H200v440Z"/>
    </Icon>
  );
});

IconMaterialAdFilled.displayName = 'AmauiIconMaterialAdFilled';

export default IconMaterialAdFilled;
