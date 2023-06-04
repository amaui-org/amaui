import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Start'

      short_name='Start'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M14.59,7.41L18.17,11H6v2h12.17l-3.59,3.59L16,18l6-6l-6-6L14.59,7.41z M2,6v12h2V6H2z"/>
    </Icon>
  );
});

IconMaterialStart.displayName = 'AmauiIconMaterialStart';

export default IconMaterialStart;
