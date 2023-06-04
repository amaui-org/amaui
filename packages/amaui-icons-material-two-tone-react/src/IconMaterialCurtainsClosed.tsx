import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosed'

      short_name='CurtainsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="14" opacity=".3" width="3" x="6" y="5"/><rect height="14" opacity=".3" width="3" x="15" y="5"/><path d="M20,19V3H4v16H2v2h20v-2H20z M9,19H6V5h3V19z M13,19h-2V5h2V19z M18,19h-3V5h3V19z"/></g></g>
    </Icon>
  );
});

IconMaterialCurtainsClosed.displayName = 'AmauiIconMaterialCurtainsClosed';

export default IconMaterialCurtainsClosed;
