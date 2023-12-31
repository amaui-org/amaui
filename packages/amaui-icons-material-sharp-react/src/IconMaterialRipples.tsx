import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRipples = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ripples'

      short_name='Ripples'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h560v-342q-18 11-38.5 16.5T680-520q-66 0-113-47t-47-113q0-21 5.5-41.5T542-760H200v560Zm-80 80v-720h720v720H120Zm80-640v560-560Z"/>
    </Icon>
  );
});

IconMaterialRipples.displayName = 'AmauiIconMaterialRipples';

export default IconMaterialRipples;
