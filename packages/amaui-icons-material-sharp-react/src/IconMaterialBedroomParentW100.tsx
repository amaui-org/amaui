import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomParentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentW100'

      short_name='BedroomParent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 16.3h.7v-1.6h11v1.6h.7v-4.65l-.75-.4V8.6H12.9q-.225 0-.487.1-.263.1-.413.25-.15-.15-.412-.25-.263-.1-.488-.1H6.55v2.65l-.75.4Zm6.55-5v-2h4.4v2Zm-5.1 0v-2h4.4v2ZM6.5 14v-2h11v2Zm-3.2 6.7V3.3h17.4v17.4ZM4 20h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentW100.displayName = 'AmauiIconMaterialBedroomParentW100';

export default IconMaterialBedroomParentW100;
