import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupFilled'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976V336h80v560h560v80H80Zm160-160V176h640v640H240Zm280-400h280V256H520v160Z"/>
    </Icon>
  );
});

IconMaterialTabGroupFilled.displayName = 'AmauiIconMaterialTabGroupFilled';

export default IconMaterialTabGroupFilled;
