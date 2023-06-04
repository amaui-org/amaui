import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmpStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStories'

      short_name='AmpStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20V4h10v16Zm-4-2V6h2v12Zm16 0V6h2v12ZM9 18h6V6H9Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialAmpStories.displayName = 'AmauiIconMaterialAmpStories';

export default IconMaterialAmpStories;
