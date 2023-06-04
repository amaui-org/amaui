import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTornadoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoW100'

      short_name='Tornado'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.85 4.3h12.3q.875 0 1.3.75.425.75 0 1.5L13.3 17.175q-.425.75-1.3.75t-1.3-.75L4.55 6.55q-.425-.75 0-1.5t1.3-.75Zm-.675 1.9L6.6 8.65h10.8l1.425-2.45q.225-.4.012-.8-.212-.4-.687-.4H5.85q-.475 0-.688.4-.212.4.013.8ZM7 9.35l2.475 4.3h5.05L17 9.35Zm2.875 5L11.3 16.8q.225.4.7.4t.7-.4l1.425-2.45Z"/>
    </Icon>
  );
});

IconMaterialTornadoW100.displayName = 'AmauiIconMaterialTornadoW100';

export default IconMaterialTornadoW100;
