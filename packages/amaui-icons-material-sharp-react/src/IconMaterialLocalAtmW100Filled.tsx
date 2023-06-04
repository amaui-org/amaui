import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalAtmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmW100Filled'

      short_name='LocalAtm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.35h.7v-1h2v-3.7h-4v-2.3h4v-.7h-2v-1h-.7v1h-2v3.7h4v2.3h-4v.7h2ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmW100Filled.displayName = 'AmauiIconMaterialLocalAtmW100Filled';

export default IconMaterialLocalAtmW100Filled;
