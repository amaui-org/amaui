import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInvertColorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsFilled'

      short_name='InvertColors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-3.325 0-5.662-2.3Q4 16.4 4 13.125q0-1.65.625-3.063Q5.25 8.65 6.35 7.55L11.3 2.7q.15-.15.325-.225Q11.8 2.4 12 2.4t.375.075q.175.075.325.225l4.95 4.85q1.1 1.1 1.725 2.512.625 1.413.625 3.063 0 3.275-2.337 5.575Q15.325 21 12 21Zm0-2V4.8L7.75 9q-.875.825-1.312 1.875Q6 11.925 6 13.125q0 2.425 1.75 4.15Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsFilled.displayName = 'AmauiIconMaterialInvertColorsFilled';

export default IconMaterialInvertColorsFilled;
