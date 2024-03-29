import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListNumberedRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedRtl'

      short_name='FormatListNumberedRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 17q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 19 15 19H4q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17Zm0-6q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 13 15 13H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11Zm0-6q.425 0 .713.287Q16 5.575 16 6t-.287.713Q15.425 7 15 7H4q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5Zm5.5 11q.2 0 .35.15.15.15.15.35v3q0 .2-.15.35-.15.15-.35.15h-2q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15H20v-.5h-.5q-.2 0-.35-.15Q19 18.2 19 18q0-.2.15-.35.15-.15.35-.15h.5V17h-1.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15Zm-1-12q.2 0 .35.15.15.15.15.35v3q0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15Q19 7.7 19 7.5V5h-.5q-.2 0-.35-.15Q18 4.7 18 4.5q0-.2.15-.35.15-.15.35-.15Zm1 6q.2 0 .35.15.15.15.15.35v.225q0 .1-.125.325L19.2 13h1.3q.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15h-2q-.2 0-.35-.15-.15-.15-.15-.35v-.225q0-.1.125-.325L19.8 11h-1.3q-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedRtl.displayName = 'AmauiIconMaterialFormatListNumberedRtl';

export default IconMaterialFormatListNumberedRtl;
