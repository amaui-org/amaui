import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatParagraphFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatParagraphFilled'

      short_name='FormatParagraph'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20v-6q-2.075 0-3.537-1.463Q4 11.075 4 9t1.463-3.537Q6.925 4 9 4h9v2h-2v14h-2V6h-3v14Z"/>
    </Icon>
  );
});

IconMaterialFormatParagraphFilled.displayName = 'AmauiIconMaterialFormatParagraphFilled';

export default IconMaterialFormatParagraphFilled;
