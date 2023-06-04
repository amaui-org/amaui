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
      <path d="M10.75 18.6v-5.9h-.25q-1.55 0-2.625-1.075T6.8 9q0-1.55 1.075-2.625T10.5 5.3h5.65V6h-2v12.6h-.7V6h-2v12.6Z"/>
    </Icon>
  );
});

IconMaterialFormatParagraphW100.displayName = 'AmauiIconMaterialFormatParagraphW100';

export default IconMaterialFormatParagraphW100;
