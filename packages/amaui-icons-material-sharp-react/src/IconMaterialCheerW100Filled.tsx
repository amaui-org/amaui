import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheerW100Filled'

      short_name='Cheer'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m322 285-30-89 26-9 30 89-26 9Zm144-45v-88h28v88h-28Zm172 45-26-9 30-89 26 9-30 89Zm213 706-268-42-52-161 45-86 39 123 26-9-116-361 66-39 194 371h72l-6 204Zm-742 0-6-204h72l194-371 66 39-116 361 26 9 39-123 45 86-52 161-268 42Z"/>
    </Icon>
  );
});

IconMaterialCheerW100Filled.displayName = 'AmauiIconMaterialCheerW100Filled';

export default IconMaterialCheerW100Filled;
