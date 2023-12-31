import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlutterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlutterW100'

      short_name='Flutter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-372 171-480l352-352h217L280-372Zm243 244L333-318l190-189h217L550-318l190 190H523Z"/>
    </Icon>
  );
});

IconMaterialFlutterW100.displayName = 'AmauiIconMaterialFlutterW100';

export default IconMaterialFlutterW100;
