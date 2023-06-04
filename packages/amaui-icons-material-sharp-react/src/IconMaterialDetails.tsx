import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetails = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Details'

      short_name='Details'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21 12 3l10 18Zm3.4-2H11V8.925Zm7.6 0h5.6L13 8.925Z"/>
    </Icon>
  );
});

IconMaterialDetails.displayName = 'AmauiIconMaterialDetails';

export default IconMaterialDetails;
