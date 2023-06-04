import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairW100'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 18.85V17.5H2.3V9.1H4V5.9h16v3.2h1.7v8.4h-2.4v1.35h-.65V17.5H5.4v1.35ZM3 16.8h18v-7h-2v4.35H5V9.8H3Zm2.7-3.35h12.6V9.1h1V6.6H4.7v2.5h1Zm6.3.7Zm0-.7Zm0 .7Z"/>
    </Icon>
  );
});

IconMaterialChairW100.displayName = 'AmauiIconMaterialChairW100';

export default IconMaterialChairW100;
