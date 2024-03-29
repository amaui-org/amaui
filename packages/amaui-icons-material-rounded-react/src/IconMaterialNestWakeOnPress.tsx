import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPress'

      short_name='NestWakeOnPress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 13.125q-.625 0-1.062-.437Q19 12.25 19 11.625v-6q0-.625.438-1.063.437-.437 1.062-.437t1.062.437Q22 5 22 5.625v6q0 .625-.438 1.063-.437.437-1.062.437ZM7.525 21.1q-.425 0-.8-.162-.375-.163-.65-.438L2.35 16.775q-.5-.5-.562-1.25-.063-.75.287-1.35.325-.55.888-.775.562-.225 1.062-.1l1.95.45V5.6q0-1.05.725-1.775.725-.725 1.775-.725 1.05 0 1.775.725.725.725.725 1.775v4.3h.65q.125 0 .225.05t.225.1l3.7 1.8q.6.275.888.888.287.612.162 1.262l-.9 5.45q-.125.725-.7 1.188-.575.462-1.3.462Zm0-2h6.4l.95-5.45-4.15-2.05h-1.75v-6q0-.225-.137-.363Q8.7 5.1 8.475 5.1q-.225 0-.362.137-.138.138-.138.363v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPress.displayName = 'AmauiIconMaterialNestWakeOnPress';

export default IconMaterialNestWakeOnPress;
