import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalAtmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmW100'

      short_name='LocalAtm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.35h.7v-1h2v-3.7h-4v-2.3h4v-.7h-2v-1h-.7v1h-2v3.7h4v2.3h-4v.7h2ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmW100.displayName = 'AmauiIconMaterialLocalAtmW100';

export default IconMaterialLocalAtmW100;
