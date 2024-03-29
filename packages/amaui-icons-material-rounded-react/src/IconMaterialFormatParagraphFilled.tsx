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
      <path d="M10 20q-.425 0-.712-.288Q9 19.425 9 19v-5q-2.075 0-3.537-1.463Q4 11.075 4 9t1.463-3.537Q6.925 4 9 4h8q.425 0 .712.287Q18 4.575 18 5t-.288.713Q17.425 6 17 6h-1v13q0 .425-.287.712Q15.425 20 15 20t-.712-.288Q14 19.425 14 19V6h-3v13q0 .425-.287.712Q10.425 20 10 20Z"/>
    </Icon>
  );
});

IconMaterialFormatParagraphFilled.displayName = 'AmauiIconMaterialFormatParagraphFilled';

export default IconMaterialFormatParagraphFilled;
