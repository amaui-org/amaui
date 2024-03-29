import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressFilled'

      short_name='NestWakeOnPress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 13.125q-.625 0-1.062-.437Q19 12.25 19 11.625v-6q0-.625.438-1.063.437-.437 1.062-.437t1.062.437Q22 5 22 5.625v6q0 .625-.438 1.063-.437.437-1.062.437ZM8.175 21.1q-.45 0-.912-.162-.463-.163-.738-.438L2.65 16.425q-.275-.275-.288-.7-.012-.425.213-.75.175-.25.475-.362.3-.113.675-.013l3.25.75V4.6q0-.625.438-1.063Q7.85 3.1 8.475 3.1t1.063.437q.437.438.437 1.063v6h.9q.2 0 .45.05t.45.15l4.1 2.05q.575.275.875.862.3.588.2 1.213l-.625 4.45q-.125.75-.675 1.238-.55.487-1.3.487Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressFilled.displayName = 'AmauiIconMaterialNestWakeOnPressFilled';

export default IconMaterialNestWakeOnPressFilled;
