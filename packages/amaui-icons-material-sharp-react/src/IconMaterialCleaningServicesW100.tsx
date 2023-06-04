import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningServicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesW100'

      short_name='CleaningServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 21.85v-9.7H9.9v-9.5h4.2v9.5h5.75v9.7Zm.7-.7H7.9v-4h.7v4h3.05v-4h.7v4h3.05v-4h.7v4h3.05v-8.3H4.85Z"/>
    </Icon>
  );
});

IconMaterialCleaningServicesW100.displayName = 'AmauiIconMaterialCleaningServicesW100';

export default IconMaterialCleaningServicesW100;
