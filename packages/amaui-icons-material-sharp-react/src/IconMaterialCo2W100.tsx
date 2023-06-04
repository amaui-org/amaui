import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCo2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2W100'

      short_name='Co2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 14.6V9.4h4.2v5.2Zm.7-.7h2.8v-3.8h-2.8Zm-7.7.7V9.4h4.2v1.2h-.7v-.5H4.1v3.8h2.8v-.5h.7v1.2Zm14 3v-2.95h3V13.1h-3v-.7h3.7v2.95h-3v1.55h3v.7Z"/>
    </Icon>
  );
});

IconMaterialCo2W100.displayName = 'AmauiIconMaterialCo2W100';

export default IconMaterialCo2W100;
