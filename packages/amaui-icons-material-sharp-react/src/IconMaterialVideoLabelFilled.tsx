import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelFilled'

      short_name='VideoLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-5h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialVideoLabelFilled.displayName = 'AmauiIconMaterialVideoLabelFilled';

export default IconMaterialVideoLabelFilled;
