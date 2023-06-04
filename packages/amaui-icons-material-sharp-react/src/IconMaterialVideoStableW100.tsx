import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoStableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableW100'

      short_name='VideoStable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.7 16.45 17.4 10 8.35 7.55l-1.7 6.4Zm-.5-.875L7.5 13.45 8.85 8.4l7.7 2.1ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoStableW100.displayName = 'AmauiIconMaterialVideoStableW100';

export default IconMaterialVideoStableW100;
