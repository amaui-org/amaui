import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCssW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CssW100'

      short_name='Css'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.925 14.6V13h.7v.9h2.8v-1.65h-3.5V9.4h4.2V11h-.7v-.9h-2.8v1.65h3.5v2.85Zm6.375 0V13h.7v.9h2.8v-1.65h-3.5V9.4h4.2V11h-.7v-.9H17v1.65h3.5v2.85Zm-12.75 0V9.4h4.2V11h-.7v-.9h-2.8v3.8h2.8V13h.7v1.6Z"/>
    </Icon>
  );
});

IconMaterialCssW100.displayName = 'AmauiIconMaterialCssW100';

export default IconMaterialCssW100;
