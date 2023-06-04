import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndArrowNotch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowNotch'

      short_name='LineEndArrowNotch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 19 3.425-6H2v-2h12.425L11 5l11 7Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowNotch.displayName = 'AmauiIconMaterialLineEndArrowNotch';

export default IconMaterialLineEndArrowNotch;
