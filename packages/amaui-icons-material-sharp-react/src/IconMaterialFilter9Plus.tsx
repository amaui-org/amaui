import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9Plus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9Plus'

      short_name='Filter9Plus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 14h4V6H9v5h3v1h-2Zm2-5h-1V8h1Zm-6 9V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Zm8.5-3h2v-2H20V9h-1.5V7h-2v2h-2v2h2Z"/>
    </Icon>
  );
});

IconMaterialFilter9Plus.displayName = 'AmauiIconMaterialFilter9Plus';

export default IconMaterialFilter9Plus;
