import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutgoingMail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMail'

      short_name='OutgoingMail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 21-1.4-1.4 1.575-1.6H15v-2h4.175L17.6 14.4 19 13l4 4ZM4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h13q.825 0 1.413.588Q19 6.175 19 7v4h-2V8.4L10.4 13 4 8.425V17h9v2ZM5.45 7l4.95 3.55L15.5 7Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMail.displayName = 'AmauiIconMaterialOutgoingMail';

export default IconMaterialOutgoingMail;
