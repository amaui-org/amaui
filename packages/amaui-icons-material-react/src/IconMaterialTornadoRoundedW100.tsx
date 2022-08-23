import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoRoundedW100'
      short_name='Tornado'

      {...props}
    >
      <path d="M5.85 4.3H18.15Q19.025 4.3 19.45 5.05Q19.875 5.8 19.45 6.55L13.3 17.175Q12.875 17.925 12 17.925Q11.125 17.925 10.7 17.175L4.55 6.55Q4.125 5.8 4.55 5.05Q4.975 4.3 5.85 4.3ZM5.175 6.2 6.6 8.65H17.4L18.825 6.2Q19.05 5.8 18.837 5.4Q18.625 5 18.15 5H5.85Q5.375 5 5.162 5.4Q4.95 5.8 5.175 6.2ZM7 9.35 9.475 13.65H14.525L17 9.35ZM9.875 14.35 11.3 16.8Q11.525 17.2 12 17.2Q12.475 17.2 12.7 16.8L14.125 14.35Z"/>
    </Icon>
  );
});

IconMaterialTornadoRoundedW100.displayName = 'AmauiIconMaterialTornadoRoundedW100';

export default IconMaterialTornadoRoundedW100;
