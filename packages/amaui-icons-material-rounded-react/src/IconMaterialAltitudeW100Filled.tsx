import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltitudeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeW100Filled'

      short_name='Altitude'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.975 19.65q-.475 0-.675-.413-.2-.412.075-.787l2.15-2.9q.225-.3.6-.3t.6.3l2.35 3.125q.1.125.225.15.125.025.25-.075t.15-.238q.025-.137-.075-.262L9.7 17.025l3.825-5.125q.225-.3.6-.3t.6.3l4.9 6.55q.275.375.075.787-.2.413-.675.413ZM19 12q-.15 0-.25-.1t-.1-.25V6.9l-2.025 2q-.1.1-.237.088-.138-.013-.238-.113-.1-.1-.1-.238 0-.137.1-.237l2.325-2.3q.225-.225.525-.225.3 0 .525.225l2.325 2.3q.1.1.088.237-.013.138-.113.263-.1.1-.237.1-.138 0-.238-.1l-2-2v4.75q0 .15-.1.25T19 12Z"/>
    </Icon>
  );
});

IconMaterialAltitudeW100Filled.displayName = 'AmauiIconMaterialAltitudeW100Filled';

export default IconMaterialAltitudeW100Filled;
