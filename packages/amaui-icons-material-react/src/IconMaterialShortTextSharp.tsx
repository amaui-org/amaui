import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShortTextSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextSharp'
      short_name='ShortText'

      {...props}
    >
      <path d="M4 11V9H20V11ZM4 15V13H14V15Z"/>
    </Icon>
  );
});

IconMaterialShortTextSharp.displayName = 'AmauiIconMaterialShortTextSharp';

export default IconMaterialShortTextSharp;
