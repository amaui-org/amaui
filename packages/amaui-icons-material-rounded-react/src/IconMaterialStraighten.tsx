import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraighten = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Straighten'

      short_name='Straighten'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16V8q0-.825.588-1.412Q3.175 6 4 6h16q.825 0 1.413.588Q22 7.175 22 8v8q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h16V8h-3v4h-2V8h-2v4h-2V8H9v4H7V8H4v8Zm3-4h2Zm4 0h2Zm4 0h2Zm-3 0Z"/>
    </Icon>
  );
});

IconMaterialStraighten.displayName = 'AmauiIconMaterialStraighten';

export default IconMaterialStraighten;
