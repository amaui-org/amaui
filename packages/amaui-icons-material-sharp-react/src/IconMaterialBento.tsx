import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBento = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bento'

      short_name='Bento'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19V5h20v14Zm12-8h6V7h-6ZM4 17h8V7H4Zm4-3.5q-.625 0-1.062-.438Q6.5 12.625 6.5 12t.438-1.062Q7.375 10.5 8 10.5t1.062.438Q9.5 11.375 9.5 12t-.438 1.062Q8.625 13.5 8 13.5Zm6 3.5h6v-4h-6Z"/>
    </Icon>
  );
});

IconMaterialBento.displayName = 'AmauiIconMaterialBento';

export default IconMaterialBento;
