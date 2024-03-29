import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextWrapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextWrapFilled'

      short_name='FormatTextWrap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.425 0-.713-.288Q4 19.425 4 19V5q0-.425.287-.713Q4.575 4 5 4t.713.287Q6 4.575 6 5v14q0 .425-.287.712Q5.425 20 5 20Zm14 0q-.425 0-.712-.288Q18 19.425 18 19V5q0-.425.288-.713Q18.575 4 19 4t.712.287Q20 4.575 20 5v14q0 .425-.288.712Q19.425 20 19 20Zm-9.125-3.175L7.75 14.7q-.3-.3-.3-.7 0-.4.3-.7l2.125-2.125q.3-.3.713-.3.412 0 .712.3t.3.7q0 .4-.3.7l-.425.425H13q.825 0 1.413-.588Q15 11.825 15 11t-.587-1.413Q13.825 9 13 9H8q-.425 0-.713-.288Q7 8.425 7 8t.287-.713Q7.575 7 8 7h5q1.65 0 2.825 1.175Q17 9.35 17 11q0 1.65-1.175 2.825Q14.65 15 13 15h-2.125l.425.425q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialFormatTextWrapFilled.displayName = 'AmauiIconMaterialFormatTextWrapFilled';

export default IconMaterialFormatTextWrapFilled;
