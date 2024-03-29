import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeFilled'

      short_name='Swipe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7V2h1.5v2q1.8-1.475 3.975-2.238Q9.65 1 12 1q2.35 0 4.525.762Q18.7 2.525 20.5 4V2H22v5h-5V5.5h2.9q-1.65-1.45-3.675-2.225Q14.2 2.5 12 2.5q-2.2 0-4.225.775Q5.75 4.05 4.1 5.5H7V7Zm8.125 16L5 17.625l1.2-1.25 3.8.875V6.5q0-.625.438-1.062Q10.875 5 11.5 5t1.062.438Q13 5.875 13 6.5v6h1.4l5.775 2.9L19.1 23Z"/>
    </Icon>
  );
});

IconMaterialSwipeFilled.displayName = 'AmauiIconMaterialSwipeFilled';

export default IconMaterialSwipeFilled;
