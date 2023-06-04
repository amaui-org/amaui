import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVilla = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Villa'

      short_name='Villa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V8l13-5v9h1q0-.825.587-1.413Q18.175 10 19 10q.825 0 1.413.587Q21 11.175 21 12v9Zm2-2h4v-7h5V5.9L5 9.375Zm6 0h3v-3h2v3h3v-5h-8Zm-4-9Zm8 9Zm0-.5Z"/>
    </Icon>
  );
});

IconMaterialVilla.displayName = 'AmauiIconMaterialVilla';

export default IconMaterialVilla;
