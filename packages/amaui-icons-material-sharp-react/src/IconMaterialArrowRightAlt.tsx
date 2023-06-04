import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAlt'

      short_name='ArrowRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 18-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45 14 6l6 6Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAlt.displayName = 'AmauiIconMaterialArrowRightAlt';

export default IconMaterialArrowRightAlt;
