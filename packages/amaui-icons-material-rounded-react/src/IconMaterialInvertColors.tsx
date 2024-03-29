import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInvertColors = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColors'

      short_name='InvertColors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-3.325 0-5.662-2.312Q4 16.375 4 13.1q0-1.65.625-3.05t1.725-2.5L11.3 2.7q.15-.15.325-.225Q11.8 2.4 12 2.4t.375.075q.175.075.325.225l4.95 4.85q1.1 1.1 1.725 2.5T20 13.1q0 3.275-2.337 5.588Q15.325 21 12 21Zm0-2V4.8L7.75 9q-.875.825-1.312 1.862Q6 11.9 6 13.1q0 2.425 1.75 4.162Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColors.displayName = 'AmauiIconMaterialInvertColors';

export default IconMaterialInvertColors;
