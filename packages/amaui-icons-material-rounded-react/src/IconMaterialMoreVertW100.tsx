import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreVertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreVertW100'

      short_name='MoreVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.1q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm0-5.4q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm0-5.4q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialMoreVertW100.displayName = 'AmauiIconMaterialMoreVertW100';

export default IconMaterialMoreVertW100;
