import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFreeCancellationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationFilled'

      short_name='FreeCancellation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.55 22.5 13 18.95l1.4-1.4 2.125 2.125 4.25-4.25 1.4 1.425ZM7.4 17 6 15.6 7.6 14 6 12.4 7.4 11 9 12.6l1.6-1.6 1.4 1.4-1.6 1.6 1.6 1.6-1.4 1.4L9 15.4ZM3 22V4h3V2h2v2h8V2h2v2h3v8.35l-2 2.025V10H5v10h6.25l1.975 2Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationFilled.displayName = 'AmauiIconMaterialFreeCancellationFilled';

export default IconMaterialFreeCancellationFilled;
