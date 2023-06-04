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
      <path d="M14.65 4q-3.325 0-5.662 2.337Q6.65 8.675 6.65 12t2.338 5.663Q11.325 20 14.65 20h.525q.25 0 .475-.05-1.425-1.65-2.212-3.688-.788-2.037-.788-4.262 0-2.225.788-4.263.787-2.037 2.212-3.687-.225-.05-.475-.05h-.525Zm0 16.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q5.95 13.8 5.95 12t.688-3.388Q7.325 7.025 8.5 5.85t2.763-1.863Q12.85 3.3 14.65 3.3q.45 0 .875.037.425.038.85.138.275.05.325.25.05.2-.15.4-1.475 1.525-2.337 3.55Q13.35 9.7 13.35 12q0 2.3.863 4.325.862 2.025 2.337 3.55.2.2.15.4-.05.2-.325.25-.425.1-.85.138-.425.037-.875.037Zm-3.5-8.7Z"/>
    </Icon>
  );
});

IconMaterialNightlightW100.displayName = 'AmauiIconMaterialNightlightW100';

export default IconMaterialNightlightW100;
