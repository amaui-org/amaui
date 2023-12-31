import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomAppBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomAppBarW100'

      short_name='BottomAppBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-174v114q0 12 10 22t22 10h496q12 0 22-10t10-22v-114H550q-12 17-30.5 25.5T480-312q-21 0-39.5-8.5T410-346H200Zm280 6q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm-280-34h196q-14-42 12.5-78t71.5-36q45 0 71.5 36t12.5 78h196v-354q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v354Zm0 174h560-560Z"/>
    </Icon>
  );
});

IconMaterialBottomAppBarW100.displayName = 'AmauiIconMaterialBottomAppBarW100';

export default IconMaterialBottomAppBarW100;
