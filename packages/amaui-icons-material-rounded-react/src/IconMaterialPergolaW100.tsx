import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPergolaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaW100'

      short_name='Pergola'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35V3q0-.125.1-.238.1-.112.25-.112t.25.112q.1.113.1.238v1.65h15.3V3q0-.125.113-.238.112-.112.237-.112.125 0 .238.112.112.113.112.238v17.35h-.7v-11H4.35v11Zm.7-11.7h15.3v-3.3H4.35Zm7.3 11.7v-3h-3v-.7h6.7v.7h-3v3Zm-7.3-15h15.3Z"/>
    </Icon>
  );
});

IconMaterialPergolaW100.displayName = 'AmauiIconMaterialPergolaW100';

export default IconMaterialPergolaW100;
