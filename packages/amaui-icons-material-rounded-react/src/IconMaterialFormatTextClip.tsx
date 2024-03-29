import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextClip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClip'

      short_name='FormatTextClip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.425 0-.713-.288Q4 19.425 4 19V5q0-.425.287-.713Q4.575 4 5 4t.713.287Q6 4.575 6 5v14q0 .425-.287.712Q5.425 20 5 20Zm14 0q-.425 0-.712-.288Q18 19.425 18 19v-6H9q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h9V5q0-.425.288-.713Q18.575 4 19 4t.712.287Q20 4.575 20 5v14q0 .425-.288.712Q19.425 20 19 20Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClip.displayName = 'AmauiIconMaterialFormatTextClip';

export default IconMaterialFormatTextClip;
