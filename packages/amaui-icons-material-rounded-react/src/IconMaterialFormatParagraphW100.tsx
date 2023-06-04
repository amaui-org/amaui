import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatParagraphW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatParagraphW100'

      short_name='FormatParagraph'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.1 18.6q-.15 0-.25-.1t-.1-.25V12.7h-.25q-1.55 0-2.625-1.075T6.8 9q0-1.55 1.075-2.625T10.5 5.3h5.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.65v12.25q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V6h-2v12.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatParagraphW100.displayName = 'AmauiIconMaterialFormatParagraphW100';

export default IconMaterialFormatParagraphW100;
