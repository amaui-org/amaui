import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetailsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsFilled'

      short_name='Details'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21 12 3l10 18Zm3.4-2H11V8.925Zm7.6 0h5.6L13 8.925Z"/>
    </Icon>
  );
});

IconMaterialDetailsFilled.displayName = 'AmauiIconMaterialDetailsFilled';

export default IconMaterialDetailsFilled;
