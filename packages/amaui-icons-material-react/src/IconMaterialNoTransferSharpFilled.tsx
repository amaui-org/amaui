import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoTransferSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferSharpFilled'
      short_name='NoTransfer'

      {...props}
    >
      <path d="M20.475 23.3 17.15 20H19.15V21H16V19H8V21H5V17.95Q4.55 17.45 4.275 16.837Q4 16.225 4 15.5V6.825L0.675 3.5L2.1 2.075L21.9 21.875ZM19.725 16.85 12.875 10H18V7H9.875L5.875 3Q6.85 2.5 8.363 2.25Q9.875 2 12 2Q16.3 2 18.15 2.925Q20 3.85 20 6V15.5Q20 15.85 19.925 16.188Q19.85 16.525 19.725 16.85ZM8.5 16Q9.125 16 9.562 15.562Q10 15.125 10 14.5Q10 13.875 9.562 13.438Q9.125 13 8.5 13Q7.875 13 7.438 13.438Q7 13.875 7 14.5Q7 15.125 7.438 15.562Q7.875 16 8.5 16ZM6 10H7.175L6 8.825Z"/>
    </Icon>
  );
});

IconMaterialNoTransferSharpFilled.displayName = 'AmauiIconMaterialNoTransferSharpFilled';

export default IconMaterialNoTransferSharpFilled;
