import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallToActionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionW100'

      short_name='CallToAction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.35h10.7v-1.7H6.65ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialCallToActionW100.displayName = 'AmauiIconMaterialCallToActionW100';

export default IconMaterialCallToActionW100;
