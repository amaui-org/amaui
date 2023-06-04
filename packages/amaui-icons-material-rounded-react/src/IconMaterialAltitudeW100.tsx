import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltitudeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeW100'

      short_name='Altitude'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 12q-.15 0-.25-.1t-.1-.25V6.9l-2.025 2q-.1.1-.237.088-.138-.013-.238-.113-.1-.1-.1-.238 0-.137.1-.237l2.325-2.3q.225-.225.525-.225.3 0 .525.225l2.325 2.3q.1.1.088.237-.013.138-.113.238-.1.125-.237.125-.138 0-.238-.1l-2-2v4.75q0 .15-.1.25T19 12ZM4.975 19.65q-.475 0-.675-.413-.2-.412.075-.787l2.15-2.9q.225-.3.6-.3t.6.3l2.55 3.4h8.85l-5-6.65-3.15 4.2-.45-.6 3-4q.225-.3.6-.3t.6.3l4.9 6.55q.275.375.075.787-.2.413-.675.413Zm6-.7Z"/>
    </Icon>
  );
});

IconMaterialAltitudeW100.displayName = 'AmauiIconMaterialAltitudeW100';

export default IconMaterialAltitudeW100;
