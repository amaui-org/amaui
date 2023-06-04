import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamW100'

      short_name='Stream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13.35q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm1.65 5.45-.5-.5 3.45-3.45.5.5Zm3-9.7L5.2 5.65l.5-.5L9.15 8.6ZM12 21.35q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm0-16q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm3.35 3.75-.5-.5 3.5-3.45.5.5Zm3 9.7-3.45-3.45.5-.5 3.45 3.45ZM20 13.35q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Z"/>
    </Icon>
  );
});

IconMaterialStreamW100.displayName = 'AmauiIconMaterialStreamW100';

export default IconMaterialStreamW100;
