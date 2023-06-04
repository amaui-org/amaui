import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToQueueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueW100'

      short_name='AddToQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.35q.15 0 .25-.1t.1-.25v-2.65H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65V14q0 .15.1.25t.25.1Zm-1.95 5.35q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213ZM4.8 17h14.4q.35 0 .575-.225Q20 16.55 20 16.2V5.8q0-.35-.225-.575Q19.55 5 19.2 5H4.8q-.35 0-.575.225Q4 5.45 4 5.8v10.4q0 .35.225.575Q4.45 17 4.8 17ZM4 17V5v12Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueW100.displayName = 'AmauiIconMaterialAddToQueueW100';

export default IconMaterialAddToQueueW100;
