import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeW100'

      short_name='Landscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.975 16.7q-.475 0-.675-.412-.2-.413.075-.788l2.15-2.9q.225-.3.6-.3t.6.3l2.55 3.4h8.85l-5-6.65-3.15 4.2-.45-.6 3-4q.225-.3.6-.3t.6.3l4.9 6.55q.275.375.075.788-.2.412-.675.412Zm7.85-.7Zm-7.95 0H9.4l-2.275-3.05Zm0 0H9.4Z"/>
    </Icon>
  );
});

IconMaterialLandscapeW100.displayName = 'AmauiIconMaterialLandscapeW100';

export default IconMaterialLandscapeW100;
