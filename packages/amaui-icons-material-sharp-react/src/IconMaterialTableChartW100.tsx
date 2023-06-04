import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartW100'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h16.4v15.4ZM5 8.65h15V5H5Zm3.5.7H5V19h3.5Zm8 0V19H20V9.35Zm-.7 0H9.2V19h6.6Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100.displayName = 'AmauiIconMaterialTableChartW100';

export default IconMaterialTableChartW100;
