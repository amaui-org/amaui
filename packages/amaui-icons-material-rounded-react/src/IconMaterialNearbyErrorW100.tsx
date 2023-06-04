import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyErrorW100'

      short_name='NearbyError'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.2 18q-.15 0-.25-.1t-.1-.25V11q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.65q0 .15-.1.25t-.25.1Zm0 2.25q-.225 0-.362-.137-.138-.138-.138-.363 0-.2.138-.35.137-.15.362-.15.2 0 .35.15.15.15.15.35 0 .225-.15.363-.15.137-.35.137Zm-10.05-.85L3.8 13.05q-.5-.5-.5-1.05t.5-1.05l6.35-6.35q.5-.5 1.05-.475.55.025 1.05.475l4.6 4.55v1.3L11.6 5.2q-.2-.2-.4-.2t-.4.2l-6.4 6.4q-.2.2-.2.4t.2.4l6.4 6.4q.2.2.4.2t.4-.2l5.25-5.25v1.3l-4.6 4.55q-.5.45-1.05.475-.55.025-1.05-.475Zm.525-4.675-2.2-2.2Q8.25 12.3 8.25 12q0-.3.225-.525l2.2-2.2q.225-.225.525-.225.3 0 .525.225l2.2 2.2q.225.225.225.525 0 .3-.225.525l-2.2 2.2q-.225.225-.525.225-.3 0-.525-.225Z"/>
    </Icon>
  );
});

IconMaterialNearbyErrorW100.displayName = 'AmauiIconMaterialNearbyErrorW100';

export default IconMaterialNearbyErrorW100;
