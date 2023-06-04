import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCheckW100'

      short_name='NetworkCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2.1 11.1-.7-.7q2.025-2.025 4.725-3.212Q8.825 6 12 6q.425 0 .988.025.562.025.862.075l-.45 1q-.375-.05-.712-.075Q12.35 7 12 7 9.1 7 6.562 8.087 4.025 9.175 2.1 11.1Zm4.25 4.25-.7-.7q1.025-1.025 2.35-1.7 1.325-.675 3.2-.95l-.5 1.1q-1.4.225-2.512.875-1.113.65-1.838 1.375Zm5.25 3.8q-.45-.15-.662-.575-.213-.425.012-.925l4.8-10.8q.05-.075.138-.138.087-.062.212-.012t.188.138q.062.087.012.212L13.05 18.4q-.15.5-.55.7-.4.2-.9.05Zm6.05-3.8q-.275-.275-.6-.55-.325-.275-.7-.5l.3-1q.45.275.9.638.45.362.8.712Zm4.25-4.25q-.75-.75-1.75-1.487-1-.738-2.1-1.263l.3-.95q1.275.6 2.275 1.312 1 .713 1.975 1.688Z"/>
    </Icon>
  );
});

IconMaterialNetworkCheckW100.displayName = 'AmauiIconMaterialNetworkCheckW100';

export default IconMaterialNetworkCheckW100;
