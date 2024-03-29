import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareFootFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootFilled'

      short_name='SquareFoot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.9 21H5.2q-.9 0-1.55-.65T3 18.8V5.1q0-.725.675-1.013Q4.35 3.8 4.85 4.3L7.1 6.55 5.75 7.9l.7.7L7.8 7.25l2.6 2.6-1.35 1.35.7.7 1.35-1.35 2.6 2.6-1.35 1.35.7.7 1.35-1.35 2.6 2.6-1.35 1.35.7.7 1.35-1.35 2 2q.5.5.213 1.175Q19.625 21 18.9 21ZM6 9.7V18h8.3Z"/>
    </Icon>
  );
});

IconMaterialSquareFootFilled.displayName = 'AmauiIconMaterialSquareFootFilled';

export default IconMaterialSquareFootFilled;
