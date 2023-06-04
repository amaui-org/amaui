import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallToActionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionW100Filled'

      short_name='CallToAction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.35h10.7v-1.7H6.65ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialCallToActionW100Filled.displayName = 'AmauiIconMaterialCallToActionW100Filled';

export default IconMaterialCallToActionW100Filled;
