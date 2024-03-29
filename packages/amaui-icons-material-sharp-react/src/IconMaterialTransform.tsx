import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransform = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Transform'

      short_name='Transform'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16 23-4-4 1.4-1.45 1.6 1.6V17H9q-.825 0-1.412-.587Q7 15.825 7 15V9H2V7h5V4.85l-1.6 1.6L4 5l4-4 4 4-1.4 1.45L9 4.85V15h13v2h-5v2.15l1.6-1.6L20 19Zm-1-10V9h-4V7h4q.825 0 1.413.587Q17 8.175 17 9v4Z"/>
    </Icon>
  );
});

IconMaterialTransform.displayName = 'AmauiIconMaterialTransform';

export default IconMaterialTransform;
