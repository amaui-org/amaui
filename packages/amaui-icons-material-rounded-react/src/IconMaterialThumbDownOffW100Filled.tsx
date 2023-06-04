import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbDownOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffW100Filled'

      short_name='ThumbDownOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 14.7q-.575 0-1.037-.463Q2.3 13.775 2.3 13.2v-1q0-.125.025-.275.025-.15.075-.275l2.65-6.3q.2-.45.675-.75.475-.3.975-.3h8.25q.625 0 1.062.437.438.438.438 1.063v8.275q0 .3-.125.587-.125.288-.325.488l-5.075 5.025q-.175.175-.375.225-.2.05-.375-.025-.175-.075-.25-.275-.075-.2-.025-.475l1-4.925ZM19.2 4.3q.625 0 1.063.437.437.438.437 1.063v7.4q0 .625-.437 1.062-.438.438-1.063.438h-.55q-.625 0-1.062-.438-.438-.437-.438-1.062V5.775q0-.625.438-1.05.437-.425 1.062-.425Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOffW100Filled.displayName = 'AmauiIconMaterialThumbDownOffW100Filled';

export default IconMaterialThumbDownOffW100Filled;
