import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallFilled'

      short_name='CheckSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 13.6 5.9-5.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-6.6 6.6q-.3.3-.7.3-.4 0-.7-.3l-2.6-2.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275Z"/>
    </Icon>
  );
});

IconMaterialCheckSmallFilled.displayName = 'AmauiIconMaterialCheckSmallFilled';

export default IconMaterialCheckSmallFilled;
