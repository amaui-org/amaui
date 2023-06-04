import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrow'

      short_name='LineEndArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19v-6H2v-2h9V5l11 7Zm2-3.65L18.275 12 13 8.65ZM13 12Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrow.displayName = 'AmauiIconMaterialLineEndArrow';

export default IconMaterialLineEndArrow;
