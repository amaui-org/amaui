import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledW100Filled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.05 22.05 17.7 18.7H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V6.8q0-.325.112-.6.113-.275.313-.475L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM19.7 16.9l-2.8-2.8q.1-.125.15-.275.05-.15.05-.325v.125q0-.125-.1-.225t-.25-.1q-.125 0-.237.087-.113.088-.113.213l-2.8-2.8v-.3q0-.15.125-.275.125-.125.275-.125h2q.15 0 .275.125.125.125.125.275v.125q0 .125.088.225.087.1.262.1.175 0 .263-.1.087-.1.087-.225V10.5q0-.45-.325-.775T16 9.4h-2q-.35 0-.637.212-.288.213-.413.538L8.1 5.3h10.1q.65 0 1.075.425.425.425.425 1.075ZM8 14.6h2q.45 0 .775-.325t.325-.775v-.125q0-.125-.087-.238-.088-.112-.263-.112-.175 0-.262.112-.088.113-.088.238v.125q0 .15-.125.275-.125.125-.275.125H8q-.15 0-.275-.125Q7.6 13.65 7.6 13.5v-3q0-.15.125-.275Q7.85 10.1 8 10.1h1.1l-.7-.7H8q-.45 0-.775.325T6.9 10.5v3q0 .45.325.775T8 14.6Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledW100Filled.displayName = 'AmauiIconMaterialClosedCaptionDisabledW100Filled';

export default IconMaterialClosedCaptionDisabledW100Filled;
