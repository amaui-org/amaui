import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormsAddOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormsAddOnW100Filled'

      short_name='FormsAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.65 20.325v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-13-2.975v-.7h.7v.7Zm2.7 0v-.7h5.3q0 .175.013.35.012.175.012.35Zm-2.7-4v-.7h.7v.7Zm2.7 0v-.7h7.5q-.2.15-.387.325-.188.175-.388.375Zm-2.7-4v-.7h.7v.7Zm2.7 0v-.7h12v.7Zm-2.7-4v-.7h.7v.7Zm2.7 0v-.7h12v.7Z"/>
    </Icon>
  );
});

IconMaterialFormsAddOnW100Filled.displayName = 'AmauiIconMaterialFormsAddOnW100Filled';

export default IconMaterialFormsAddOnW100Filled;
