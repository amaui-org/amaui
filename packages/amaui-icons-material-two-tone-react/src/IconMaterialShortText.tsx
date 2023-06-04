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
      <path d="M0 0h24v24H0z" fill="none"/><path d="M4 9h16v2H4zm0 4h10v2H4z"/>
    </Icon>
  );
});

IconMaterialShortText.displayName = 'AmauiIconMaterialShortText';

export default IconMaterialShortText;
