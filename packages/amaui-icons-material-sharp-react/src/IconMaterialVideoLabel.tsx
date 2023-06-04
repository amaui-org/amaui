import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabel'

      short_name='VideoLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-5h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialVideoLabel.displayName = 'AmauiIconMaterialVideoLabel';

export default IconMaterialVideoLabel;
