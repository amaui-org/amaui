import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssuredWorkloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkloadW100'

      short_name='AssuredWorkload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.95 17V8.7h.7V17Zm4.7 0V8.7h.7V17ZM4 6.7v-.5l8-3.75 8 3.75v.5ZM6.1 6h11.8L12 3.25ZM4 19.7V19h10.825q0 .2.025.362l.05.338Zm12.35-5.125V8.7h.7v5.525ZM20 23q-1.4-.35-2.3-1.587-.9-1.238-.9-2.763V16.6L20 15l3.2 1.6v2.05q0 1.525-.9 2.763Q21.4 22.65 20 23Zm-.725-2.55 2.9-2.9-.5-.5-2.4 2.4-.975-.975-.5.5ZM6.1 6h11.8Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkloadW100.displayName = 'AmauiIconMaterialAssuredWorkloadW100';

export default IconMaterialAssuredWorkloadW100;
