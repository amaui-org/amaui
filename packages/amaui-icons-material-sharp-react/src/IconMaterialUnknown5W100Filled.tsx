import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknown5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown5W100Filled'

      short_name='Unknown5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-480v-28h268v28H212Zm268 348q-69 0-132.5-26T234-234l20-20q47 44 105 69t121 25q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800v-28q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialUnknown5W100Filled.displayName = 'AmauiIconMaterialUnknown5W100Filled';

export default IconMaterialUnknown5W100Filled;
