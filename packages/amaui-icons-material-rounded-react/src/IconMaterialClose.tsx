import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Close'

      short_name='Close'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 13.4-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialClose.displayName = 'AmauiIconMaterialClose';

export default IconMaterialClose;
