import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindow2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindow2W100'

      short_name='SelectWindow2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-160q14 0 23-9t9-23v-316q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v316q0 14 9 23t23 9h428Zm60-232v-28h88q14 0 23-9t9-23v-316q0-14-9-23t-23-9H340q-14 0-23 9t-9 23v200h-28v-200q0-26 17-43t43-17h428q26 0 43 17t17 43v316q0 26-17 43t-43 17h-88ZM192-132q-26 0-43-17t-17-43v-316q0-26 17-43t43-17h436q22 0 37 14.98T680-517v325q0 26-17 43t-43 17H192Zm362-567ZM406-350Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2W100.displayName = 'AmauiIconMaterialSelectWindow2W100';

export default IconMaterialSelectWindow2W100;
