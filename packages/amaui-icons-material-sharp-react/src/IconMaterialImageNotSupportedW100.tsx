import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedW100'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 21-1.3-1.3H4.3V5.3L3 4l.5-.5 17 17ZM5 19h13l-2.65-2.65H7.3l2.35-3.1 1.85 2.15 1.225-1.675L5 6Zm14.7-2.125-.7-.7V5H7.825l-.7-.7H19.7Zm-6.25-6.25Zm-1.95 1.9Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedW100.displayName = 'AmauiIconMaterialImageNotSupportedW100';

export default IconMaterialImageNotSupportedW100;
