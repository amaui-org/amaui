import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetailsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsRounded'
      short_name='Details'

      {...props}
    >
      <path d="M3.7 21Q3.125 21 2.838 20.512Q2.55 20.025 2.825 19.525L11.125 4.575Q11.4 4.075 12 4.075Q12.6 4.075 12.875 4.575L21.175 19.525Q21.45 20.025 21.163 20.512Q20.875 21 20.3 21ZM5.4 19H11V8.925ZM13 19H18.6L13 8.925Z"/>
    </Icon>
  );
});

IconMaterialDetailsRounded.displayName = 'AmauiIconMaterialDetailsRounded';

export default IconMaterialDetailsRounded;
