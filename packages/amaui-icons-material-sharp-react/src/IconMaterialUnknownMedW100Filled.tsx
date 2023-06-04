import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownMedW100Filled'

      short_name='UnknownMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 12.35v-1.7H11v1.7Zm9.675 0v-1.7h7.7v1.7Z"/>
    </Icon>
  );
});

IconMaterialUnknownMedW100Filled.displayName = 'AmauiIconMaterialUnknownMedW100Filled';

export default IconMaterialUnknownMedW100Filled;
