import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPinCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleW100Filled'

      short_name='PersonPinCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.35q1.05 0 1.938-.463.887-.462 1.487-1.237-.75-.5-1.613-.75-.862-.25-1.812-.25-.95 0-1.812.25-.863.25-1.613.75.6.775 1.487 1.237.888.463 1.938.463Zm0-5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 6.65 12 6.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 11.85q-.15 0-.275-.037-.125-.038-.25-.138-3.45-3.2-5.137-5.938Q4.65 12.35 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.15-1.687 4.887-1.688 2.738-5.138 5.938-.1.1-.237.138-.138.037-.288.037Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleW100Filled.displayName = 'AmauiIconMaterialPersonPinCircleW100Filled';

export default IconMaterialPersonPinCircleW100Filled;
