import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer10SelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectFilled'

      short_name='Timer10Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16h3V8h-3Zm-3 3V5h9v14Zm-4 0V8H1V5h5v14Zm14 0v-2h4v-1h-4v-5h6v2h-4v1h4v5Z"/>
    </Icon>
  );
});

IconMaterialTimer10SelectFilled.displayName = 'AmauiIconMaterialTimer10SelectFilled';

export default IconMaterialTimer10SelectFilled;
