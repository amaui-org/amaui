import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRocketLaunchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketLaunchW100Filled'

      short_name='RocketLaunch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.075 11.5 3.45-3.45q.275-.275.625-.388.35-.112.725-.037l1.45.3q-1.05 1.3-1.737 2.35-.688 1.05-1.388 2.55ZM7.9 12.925q.675-1.425 1.563-2.737.887-1.313 1.987-2.413Q13.225 6 15.238 5.112q2.012-.887 4.587-.837.05 2.575-.837 4.587-.888 2.013-2.663 3.788-1.1 1.1-2.412 1.975-1.313.875-2.738 1.55Zm5.95-2.7q.4.4.962.4.563 0 .963-.4t.4-.95q0-.55-.4-.95-.4-.4-.963-.4-.562 0-.962.4-.4.4-.4.95 0 .55.4.95Zm-1.3 9.8L11.225 16.9q1.5-.7 2.55-1.4 1.05-.7 2.35-1.75l.3 1.45q.075.375-.025.725t-.375.625Zm-7.075-3.85q.5-.5 1.213-.487.712.012 1.212.512t.5 1.213q0 .712-.5 1.212-.475.475-1.5.813-1.025.337-2.175.412.075-1.15.425-2.175t.825-1.5Z"/>
    </Icon>
  );
});

IconMaterialRocketLaunchW100Filled.displayName = 'AmauiIconMaterialRocketLaunchW100Filled';

export default IconMaterialRocketLaunchW100Filled;
