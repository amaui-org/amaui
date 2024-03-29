import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrikethroughSFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSFilled'

      short_name='StrikethroughS'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 20q-1.9 0-3.375-1.125T6.65 15.8l2.2-.95q.35 1.2 1.212 1.975.863.775 2.138.775 1.05 0 1.9-.5.85-.5.85-1.6 0-.45-.175-.825Q14.6 14.3 14.3 14h2.8q.125.35.188.712.062.363.062.788 0 2.15-1.538 3.325Q14.275 20 12.15 20ZM2 12v-2h20v2Zm10.05-8.15q1.65 0 2.888.812 1.237.813 1.912 2.488l-2.2.975q-.225-.725-.838-1.3Q13.2 6.25 12.1 6.25q-1.025 0-1.7.463-.675.462-.75 1.287h-2.4q.05-1.725 1.363-2.938Q9.925 3.85 12.05 3.85Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSFilled.displayName = 'AmauiIconMaterialStrikethroughSFilled';

export default IconMaterialStrikethroughSFilled;
