import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchAppW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppW100'

      short_name='TouchApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 2.3q1.725 0 2.963 1.237Q15.7 4.775 15.7 6.5q0 1.45-.837 2.537-.838 1.088-2.163 1.488v-.75q1.025-.375 1.663-1.25Q15 7.65 15 6.5q0-1.425-1.037-2.463Q12.925 3 11.5 3T9.038 4.037Q8 5.075 8 6.5q0 1.175.65 2.062.65.888 1.65 1.238v.725Q9 10.15 8.15 9.062 7.3 7.975 7.3 6.5q0-1.725 1.238-2.963Q9.775 2.3 11.5 2.3Zm-1.25 18.4-4.5-4.45.75-.75 3.8.75V6.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Zm.3-.7h6.4l.95-5.425-4.15-2.075H12v-6q0-.225-.137-.363Q11.725 6 11.5 6q-.225 0-.363.137Q11 6.275 11 6.5v10.6l-4.25-.85Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialTouchAppW100.displayName = 'AmauiIconMaterialTouchAppW100';

export default IconMaterialTouchAppW100;
