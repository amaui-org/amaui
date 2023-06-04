import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupW100'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M266 764V228h536v536H266Zm28-28h480V366H534V256H294v480ZM158 872V368h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabGroupW100.displayName = 'AmauiIconMaterialTabGroupW100';

export default IconMaterialTabGroupW100;
