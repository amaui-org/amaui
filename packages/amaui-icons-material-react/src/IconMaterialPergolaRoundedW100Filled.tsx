import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPergolaRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaRoundedW100Filled'
      short_name='Pergola'

      {...props}
    >
      <path d="M3.65 20.35V3q0-.125.1-.238.1-.112.25-.112t.25.112q.1.113.1.238v1.65h15.3V3q0-.125.113-.238.112-.112.237-.112.125 0 .238.112.112.113.112.238v17.35h-.7v-11H4.35v11Zm8 0v-3h-3v-.7h6.7v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialPergolaRoundedW100Filled.displayName = 'AmauiIconMaterialPergolaRoundedW100Filled';

export default IconMaterialPergolaRoundedW100Filled;
