import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToQueueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueW100Filled'

      short_name='AddToQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.35q.15 0 .25-.1t.1-.25v-2.65H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65V14q0 .15.1.25t.25.1Zm-1.95 5.35q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueW100Filled.displayName = 'AmauiIconMaterialAddToQueueW100Filled';

export default IconMaterialAddToQueueW100Filled;
