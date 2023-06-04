import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcW100'

      short_name='Wc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.35 21.35V14.5h-1.5V7.65h5.3v6.85h-1.5v6.85Zm9.3 0V16H13.4l2.075-8.35h2.05L19.6 16h-2.25v5.35ZM7.5 6.6q-.675 0-1.137-.463Q5.9 5.675 5.9 5t.463-1.138Q6.825 3.4 7.5 3.4t1.137.462Q9.1 4.325 9.1 5q0 .675-.463 1.137Q8.175 6.6 7.5 6.6Zm9 0q-.675 0-1.137-.463Q14.9 5.675 14.9 5t.463-1.138Q15.825 3.4 16.5 3.4t1.138.462Q18.1 4.325 18.1 5q0 .675-.462 1.137-.463.463-1.138.463Z"/>
    </Icon>
  );
});

IconMaterialWcW100.displayName = 'AmauiIconMaterialWcW100';

export default IconMaterialWcW100;
