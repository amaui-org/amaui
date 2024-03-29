import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightFilled'

      short_name='SwipeRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7q.55-2.175 3.2-4.088Q7.85 1 12 1q2.425 0 4.587.8 2.163.8 3.913 2.225V2H22v5h-5V5.5h2.9q-1.6-1.4-3.612-2.2-2.013-.8-4.288-.8-3.575 0-5.712 1.5Q4.15 5.5 3.575 7Zm8.125 16L5 17.625l1.2-1.25 3.8.875V6.5q0-.625.438-1.062Q10.875 5 11.5 5t1.062.438Q13 5.875 13 6.5v6h1.4l5.775 2.9L19.1 23Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightFilled.displayName = 'AmauiIconMaterialSwipeRightFilled';

export default IconMaterialSwipeRightFilled;
