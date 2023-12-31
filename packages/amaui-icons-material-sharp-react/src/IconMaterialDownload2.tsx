import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownload2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Download2'

      short_name='Download2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"/>
    </Icon>
  );
});

IconMaterialDownload2.displayName = 'AmauiIconMaterialDownload2';

export default IconMaterialDownload2;
