import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssuredWorkloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkloadW100Filled'

      short_name='AssuredWorkload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.95 17V8.7h.7V17Zm4.7 0V8.7h.7V17ZM4 6.7v-.5l8-3.75 8 3.75v.5Zm0 13V19h10.825q0 .2.025.362l.05.338Zm12.35-5.125V8.7h.7v5.525ZM20 23q-1.4-.35-2.3-1.587-.9-1.238-.9-2.763V16.6L20 15l3.2 1.6v2.05q0 1.525-.9 2.763Q21.4 22.65 20 23Zm-.725-2.55 2.9-2.9-.5-.5-2.4 2.4-.975-.975-.5.5Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkloadW100Filled.displayName = 'AmauiIconMaterialAssuredWorkloadW100Filled';

export default IconMaterialAssuredWorkloadW100Filled;
