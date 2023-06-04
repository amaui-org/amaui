import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJavascriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JavascriptW100'

      short_name='Javascript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.4 14.6V13h.7v.9h2.8v-1.65h-3.5V9.4h4.2V11h-.7v-.9h-2.8v1.65h3.5v2.85Zm-6.1 0v-2.1H7v1.4h2.25V9.4h.7v5.2Z"/>
    </Icon>
  );
});

IconMaterialJavascriptW100.displayName = 'AmauiIconMaterialJavascriptW100';

export default IconMaterialJavascriptW100;
