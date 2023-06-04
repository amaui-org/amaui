import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmpStoriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesFilled'

      short_name='AmpStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20V4h10v16Zm-4-2V6h2v12Zm16 0V6h2v12Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesFilled.displayName = 'AmauiIconMaterialAmpStoriesFilled';

export default IconMaterialAmpStoriesFilled;
