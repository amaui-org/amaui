import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCssW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CssW100Filled'

      short_name='Css'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.925 14.6V13h.7v.9h2.8v-1.55h-3.5V9.4h4.2V11h-.7v-.9h-2.8v1.55h3.5v2.95Zm6.375 0V13h.7v.9h2.8v-1.55h-3.5V9.4h4.2V11h-.7v-.9H17v1.55h3.5v2.95Zm-12.75 0V9.4h4.2V11h-.7v-.9h-2.8v3.8h2.8V13h.7v1.6Z"/>
    </Icon>
  );
});

IconMaterialCssW100Filled.displayName = 'AmauiIconMaterialCssW100Filled';

export default IconMaterialCssW100Filled;
