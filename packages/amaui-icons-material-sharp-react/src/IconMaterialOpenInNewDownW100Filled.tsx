import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewDownW100Filled'

      short_name='OpenInNewDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884V268h616v288h-28V296H200v560h260v28H172Zm388 0v-28h181L373 488l19-19 368 367V656h28v228H560Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewDownW100Filled.displayName = 'AmauiIconMaterialOpenInNewDownW100Filled';

export default IconMaterialOpenInNewDownW100Filled;
