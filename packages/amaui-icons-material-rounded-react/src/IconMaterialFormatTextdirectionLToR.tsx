import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextdirectionLToR = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionLToR'

      short_name='FormatTextdirectionLToR'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 15q-.425 0-.712-.288Q9 14.425 9 14v-4q-1.65 0-2.825-1.175Q5 7.65 5 6q0-1.65 1.175-2.825Q7.35 2 9 2h7q.425 0 .712.287Q17 2.575 17 3t-.288.712Q16.425 4 16 4h-1v10q0 .425-.287.712Q14.425 15 14 15t-.712-.288Q13 14.425 13 14V4h-2v10q0 .425-.287.712Q10.425 15 10 15Zm6.3 6.3q-.275-.275-.275-.7 0-.425.275-.7l.9-.9H4q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17h13.2l-.9-.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.7.275-.425 0-.7-.275ZM9 8V4q-.825 0-1.412.588Q7 5.175 7 6t.588 1.412Q8.175 8 9 8Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionLToR.displayName = 'AmauiIconMaterialFormatTextdirectionLToR';

export default IconMaterialFormatTextdirectionLToR;
