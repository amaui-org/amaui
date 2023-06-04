import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShortTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextW100'

      short_name='ShortText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 14.35v-.7h8.7v.7Zm0-4v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialShortTextW100.displayName = 'AmauiIconMaterialShortTextW100';

export default IconMaterialShortTextW100;
