import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderColor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColor'

      short_name='BorderColor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 24v-4h20v4Zm2-6v-3.75l9.05-9.05 3.75 3.75L7.75 18Zm2-2h.9L14 8.95 13.05 8 6 15.1Zm11.925-8.15-3.75-3.75 2.5-2.5 3.75 3.75ZM6 16Z"/>
    </Icon>
  );
});

IconMaterialBorderColor.displayName = 'AmauiIconMaterialBorderColor';

export default IconMaterialBorderColor;
