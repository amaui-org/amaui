import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolymerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerFilled'

      short_name='Polymer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.95 20 .5 12 5 4h4l-4.5 8 2.6 4.65L14.9 4H19l4.5 8-4.5 8h-4l4.5-8-2.6-4.6L9.15 20Z"/>
    </Icon>
  );
});

IconMaterialPolymerFilled.displayName = 'AmauiIconMaterialPolymerFilled';

export default IconMaterialPolymerFilled;
