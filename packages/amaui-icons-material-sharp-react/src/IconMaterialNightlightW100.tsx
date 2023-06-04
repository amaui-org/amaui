import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightW100'

      short_name='Nightlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q5.95 13.8 5.95 12t.688-3.388Q7.325 7.025 8.5 5.85t2.763-1.863Q12.85 3.3 14.65 3.3q.65 0 1.238.075.587.075 1.162.275-1.7 1.55-2.7 3.7-1 2.15-1 4.65 0 2.5 1 4.65 1 2.15 2.7 3.7-.575.2-1.162.275-.588.075-1.238.075Zm0-.7h.525q.25 0 .475-.05-1.425-1.65-2.212-3.688-.788-2.037-.788-4.262 0-2.225.788-4.263.787-2.037 2.212-3.687-.225-.05-.475-.05h-.525q-3.325 0-5.662 2.337Q6.65 8.675 6.65 12t2.338 5.663Q11.325 20 14.65 20Zm-3.5-8Z"/>
    </Icon>
  );
});

IconMaterialNightlightW100.displayName = 'AmauiIconMaterialNightlightW100';

export default IconMaterialNightlightW100;
