import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowFilled'

      short_name='LineEndArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19v-6H2v-2h9V5l11 7Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowFilled.displayName = 'AmauiIconMaterialLineEndArrowFilled';

export default IconMaterialLineEndArrowFilled;
