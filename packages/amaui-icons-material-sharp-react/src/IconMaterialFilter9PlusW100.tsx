import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9PlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusW100'

      short_name='Filter9Plus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 13.35h3.2v-6.7H9v3.7h3v2.3H9.5Zm2.5-3.7H9.7v-2.3H12ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12ZM16 12.35h.7v-2h2v-.7h-2v-2H16v2h-2v.7h2Z"/>
    </Icon>
  );
});

IconMaterialFilter9PlusW100.displayName = 'AmauiIconMaterialFilter9PlusW100';

export default IconMaterialFilter9PlusW100;
