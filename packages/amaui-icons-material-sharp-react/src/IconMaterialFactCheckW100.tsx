import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckW100'

      short_name='FactCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 8.35h3.7v-.7h-3.7Zm0 4h3.7v-.7h-3.7Zm0 4h3.7v-.7h-3.7Zm8.9-2.275 4.025-4.025-.5-.5-3.525 3.55-1.425-1.425-.475.5ZM3.3 19.7V4.3h17.4v15.4ZM4 19h16V5H4Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialFactCheckW100.displayName = 'AmauiIconMaterialFactCheckW100';

export default IconMaterialFactCheckW100;
