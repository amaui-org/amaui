import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalActivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityW100Filled'

      short_name='LocalActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7v-3.65q.9-.425 1.45-1.25.55-.825.55-1.8 0-.975-.55-1.8-.55-.825-1.45-1.25V5.3h17.4v3.65q-.9.425-1.45 1.25-.55.825-.55 1.8 0 .975.55 1.8.55.825 1.45 1.25v3.65Zm6.85-4L12 13.25l1.8 1.4-.7-2.25 1.95-1.5h-2.3L12 8.6l-.75 2.3h-2.3l1.9 1.5Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityW100Filled.displayName = 'AmauiIconMaterialLocalActivityW100Filled';

export default IconMaterialLocalActivityW100Filled;
