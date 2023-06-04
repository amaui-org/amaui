import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlourescent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flourescent'

      short_name='Flourescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 15.05V9.05H19V15.05ZM11 5V2H13V5ZM18.7 7.8 17.3 6.4 19.1 4.6 20.5 6ZM11 22V19H13V22ZM19.1 19.5 17.3 17.7 18.7 16.3 20.5 18.1ZM5.3 7.8 3.5 6 4.9 4.6 6.7 6.4ZM4.9 19.5 3.5 18.1 5.3 16.3 6.7 17.7ZM7 13.05H17V11.05H7ZM7 13.05V11.05V13.05Z"/>
    </Icon>
  );
});

IconMaterialFlourescent.displayName = 'AmauiIconMaterialFlourescent';

export default IconMaterialFlourescent;
