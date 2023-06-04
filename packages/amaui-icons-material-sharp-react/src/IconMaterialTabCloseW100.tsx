import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseW100'

      short_name='TabClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m450 599 84-84 84 84 19-19-84-84 84-84-19-19-84 84-84-84-19 19 84 84-84 84 19 19ZM266 764V228h536v536H266Zm28-28h480V256H294v480ZM158 872V368h28v476h476v28H158Zm136-136V256v480Z"/>
    </Icon>
  );
});

IconMaterialTabCloseW100.displayName = 'AmauiIconMaterialTabCloseW100';

export default IconMaterialTabCloseW100;
