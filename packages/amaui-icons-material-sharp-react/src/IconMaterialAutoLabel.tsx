import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoLabel'

      short_name='AutoLabel'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M840 576 642 856H120V296h522l198 280Zm-98 0L600 376H200v400h400l142-200Zm-542 0v200-400 200Zm221 160 50-110 110-50-110-50-50-110-50 110-110 50 110 50 50 110Z"/>
    </Icon>
  );
});

IconMaterialAutoLabel.displayName = 'AmauiIconMaterialAutoLabel';

export default IconMaterialAutoLabel;
