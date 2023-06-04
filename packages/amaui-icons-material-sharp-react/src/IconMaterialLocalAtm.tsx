import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalAtm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtm'

      short_name='LocalAtm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-1h2v-5h-4v-1h4V8h-2V7h-2v1H9v5h4v1H9v2h2Zm-9 3V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialLocalAtm.displayName = 'AmauiIconMaterialLocalAtm';

export default IconMaterialLocalAtm;
