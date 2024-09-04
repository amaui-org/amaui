import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepW100'

      short_name='Keep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-760v302l54 54q2 2 3 4.5t1 5.17v7.66q0 5.67-4.31 10.17T631-372H494v175.7q0 6.3-2 11.3-2 5-7 10-2.18 2-5.09 2-2.91 0-4.91-2-5-5-7-10.22-2-5.21-2-10.78v-176H329q-6.37 0-10.69-4.5Q314-381 314-386.67v-7.66q0-2.67 1-5.17t3-4.5l54-54v-302h-26q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h268q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-26ZM354-400h252l-46-46v-314H400v314l-46 46Zm126 0Z"/>
    </Icon>
  );
});

IconMaterialKeepW100.displayName = 'AmauiIconMaterialKeepW100';

export default IconMaterialKeepW100;
