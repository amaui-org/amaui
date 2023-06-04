import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Label'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19V5h13.05L21 12l-4.95 7Zm2-2h10l3.55-5L15 7H5ZM5 7v10Z"/>
    </Icon>
  );
});

IconMaterialLabel.displayName = 'AmauiIconMaterialLabel';

export default IconMaterialLabel;
