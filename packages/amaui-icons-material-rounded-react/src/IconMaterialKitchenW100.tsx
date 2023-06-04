import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKitchenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenW100'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.6 8q-.15 0-.25-.1t-.1-.25v-1.8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.8q0 .15-.1.25T8.6 8Zm0 7.85q-.15 0-.25-.1t-.1-.25v-3.45q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.45q0 .15-.1.25t-.25.1ZM6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2V4.8q0-.625.438-1.063Q6.175 3.3 6.8 3.3h10.4q.625 0 1.062.437.438.438.438 1.063v14.4q0 .625-.438 1.062-.437.438-1.062.438Zm0-.7h10.4q.35 0 .575-.225Q18 19.55 18 19.2v-9H6v9q0 .35.225.575Q6.45 20 6.8 20ZM6 9.5h12V4.8q0-.35-.225-.575Q17.55 4 17.2 4H6.8q-.35 0-.575.225Q6 4.45 6 4.8Z"/>
    </Icon>
  );
});

IconMaterialKitchenW100.displayName = 'AmauiIconMaterialKitchenW100';

export default IconMaterialKitchenW100;
