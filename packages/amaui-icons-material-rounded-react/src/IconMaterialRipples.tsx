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
      <path d="M200-200h560v-342q-18 11-38.5 16.5T680-520q-66 0-113-47t-47-113q0-21 5.5-41.5T542-760H200v560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560-560Z"/>
    </Icon>
  );
});

IconMaterialRipples.displayName = 'AmauiIconMaterialRipples';

export default IconMaterialRipples;
