import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphones = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Headphones'

      short_name='Headphones'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-9q0-1.875.712-3.513.713-1.637 1.926-2.85 1.212-1.212 2.85-1.925Q10.125 3 12 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 10.125 21 12v9h-6v-8h4v-1q0-2.925-2.038-4.963Q14.925 5 12 5T7.038 7.037Q5 9.075 5 12v1h4v8Zm2-2h2v-4H5Zm12 0h2v-4h-2ZM5 19h2Zm12 0h2Z"/>
    </Icon>
  );
});

IconMaterialHeadphones.displayName = 'AmauiIconMaterialHeadphones';

export default IconMaterialHeadphones;
