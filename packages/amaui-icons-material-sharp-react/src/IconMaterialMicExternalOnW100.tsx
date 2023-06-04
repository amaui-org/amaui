import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnW100'

      short_name='MicExternalOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.6 7.6q-.225-.3-.337-.65-.113-.35-.113-.7 0-.975.688-1.663Q6.525 3.9 7.5 3.9q.975 0 1.663.687.687.688.687 1.663 0 .35-.112.7-.113.35-.338.65Zm1.55 12.5V17h-.7L5.6 8.7h3.8L8.55 17h-.7v2.4h4.8V3.9h6.2v16.2h-.7V4.6h-4.8v15.5Zm-.075-3.8h.85L8.6 9.4H6.4Zm.85-6.9H6.4h2.2Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnW100.displayName = 'AmauiIconMaterialMicExternalOnW100';

export default IconMaterialMicExternalOnW100;
