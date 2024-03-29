import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheck'

      short_name='SearchCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.925 9.7 10.9 7.725q.225-.225.525-.225.3 0 .525.225.225.225.225.537 0 .313-.225.538l-2.5 2.5q-.225.225-.525.225-.3 0-.525-.225L7.05 9.95q-.225-.225-.225-.538 0-.312.225-.537.225-.225.525-.225.3 0 .525.225ZM20.3 20.3q-.275.275-.7.275-.425 0-.7-.275l-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l5.6 5.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/>
    </Icon>
  );
});

IconMaterialSearchCheck.displayName = 'AmauiIconMaterialSearchCheck';

export default IconMaterialSearchCheck;
