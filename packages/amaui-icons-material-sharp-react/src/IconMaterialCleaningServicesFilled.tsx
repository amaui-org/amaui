import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesFilled'

      short_name='CleaningServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23V11h6V1h6v10h6v12Zm2-2h2v-4h2v4h2v-4h2v4h2v-4h2v4h2v-8H5Z"/>
    </Icon>
  );
});

IconMaterialCleaningServicesFilled.displayName = 'AmauiIconMaterialCleaningServicesFilled';

export default IconMaterialCleaningServicesFilled;
