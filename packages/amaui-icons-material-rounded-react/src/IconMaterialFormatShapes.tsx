import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatShapes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatShapes'

      short_name='FormatShapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 23q-.425 0-.712-.288Q1 22.425 1 22v-4q0-.425.288-.712Q1.575 17 2 17h1V7H2q-.425 0-.712-.287Q1 6.425 1 6V2q0-.425.288-.713Q1.575 1 2 1h4q.425 0 .713.287Q7 1.575 7 2v1h10V2q0-.425.288-.713Q17.575 1 18 1h4q.425 0 .712.287Q23 1.575 23 2v4q0 .425-.288.713Q22.425 7 22 7h-1v10h1q.425 0 .712.288.288.287.288.712v4q0 .425-.288.712Q22.425 23 22 23h-4q-.425 0-.712-.288Q17 22.425 17 22v-1H7v1q0 .425-.287.712Q6.425 23 6 23Zm5-4h10v-1q0-.425.288-.712Q17.575 17 18 17h1V7h-1q-.425 0-.712-.287Q17 6.425 17 6V5H7v1q0 .425-.287.713Q6.425 7 6 7H5v10h1q.425 0 .713.288Q7 17.575 7 18Zm1.85-3q-.425 0-.625-.288-.2-.287-.05-.712l2.75-7.25q.125-.3.425-.525Q11.65 7 12 7q.325 0 .638.225.312.225.437.525l2.75 7.3q.15.4-.05.675T15.15 16q-.2 0-.4-.137-.2-.138-.275-.338L13.85 13.7H10.2l-.625 1.8q-.075.2-.287.35-.213.15-.438.15Zm1.8-3.6h2.7l-1.3-3.75h-.1ZM3 5h2V3H3Zm16 0h2V3h-2Zm0 16h2v-2h-2ZM3 21h2v-2H3ZM19 5Zm0 14ZM5 19ZM5 5Z"/>
    </Icon>
  );
});

IconMaterialFormatShapes.displayName = 'AmauiIconMaterialFormatShapes';

export default IconMaterialFormatShapes;
