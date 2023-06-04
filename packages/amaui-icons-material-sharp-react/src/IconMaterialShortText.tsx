import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShortText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortText'

      short_name='ShortText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15v-2h10v2Zm0-4V9h16v2Z"/>
    </Icon>
  );
});

IconMaterialShortText.displayName = 'AmauiIconMaterialShortText';

export default IconMaterialShortText;
