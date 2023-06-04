import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseW100'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.7 18.7H7.05q-.325 0-.537-.213-.213-.212-.213-.537v-7h-.125q-.275 0-.375-.25-.1-.25.1-.45l5.6-5.05q.2-.2.488-.2.287 0 .412.125L15.7 8.1V6.25q0-.15.1-.25t.25-.1h.5q.15 0 .25.1t.1.25v2.9l1.2 1.1q.2.2.1.45t-.375.25H17.7v7q0 .325-.212.537-.213.213-.538.213H13.3v-5h-2.6ZM7 18h3v-4.25q0-.325.213-.538.212-.212.537-.212h2.5q.325 0 .538.212.212.213.212.538V18h3v-7.8l-5-4.5-5 4.5Zm3.25-8h3.5q0-.675-.525-1.113Q12.7 8.45 12 8.45q-.7 0-1.225.437-.525.438-.525 1.113Zm.5 3h2.5-2.5Z"/>
    </Icon>
  );
});

IconMaterialHouseW100.displayName = 'AmauiIconMaterialHouseW100';

export default IconMaterialHouseW100;
