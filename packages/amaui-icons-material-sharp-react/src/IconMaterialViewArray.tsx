import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewArray = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArray'

      short_name='ViewArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 7v10Zm9 12V5h3v14ZM7 19V5h10v14Zm-4 0V5h3v14Zm6-2h6V7H9Z"/>
    </Icon>
  );
});

IconMaterialViewArray.displayName = 'AmauiIconMaterialViewArray';

export default IconMaterialViewArray;
