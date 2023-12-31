import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownload2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Download2W100Filled'

      short_name='Download2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-28h536v28H212Zm267-148L271-559h122v-269h173v269h122L479-280Z"/>
    </Icon>
  );
});

IconMaterialDownload2W100Filled.displayName = 'AmauiIconMaterialDownload2W100Filled';

export default IconMaterialDownload2W100Filled;
