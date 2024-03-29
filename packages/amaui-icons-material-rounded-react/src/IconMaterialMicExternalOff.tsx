import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOff'

      short_name='MicExternalOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 6.65 5.35 2.5q.35-.275.775-.388Q6.55 2 7 2q1.25 0 2.125.862Q10 3.725 10 5q0 .45-.137.862-.138.413-.363.788ZM20 17.15l-2-2V6q0-.825-.587-1.412Q16.825 4 16 4q-.825 0-1.412.588Q14 5.175 14 6v5.15l-2-2V6q0-1.7 1.175-2.85Q14.35 2 16 2q1.65 0 2.825 1.15Q20 4.3 20 6Zm-.2 5.45L14 16.8V18q0 1.65-1.175 2.825Q11.65 22 10 22q-1.65 0-2.825-1.175Q6 19.65 6 18h-.55q-.2 0-.337-.125-.138-.125-.163-.325L4.1 9.1q-.05-.45.25-.775T5.1 8h.05L1.4 4.2q-.275-.275-.287-.688Q1.1 3.1 1.4 2.8q.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM6.8 16h.4l.55-5.45-.6-.55H6.2Zm3.2 4q.825 0 1.413-.587Q12 18.825 12 18v-3.2l-2.45-2.45-.5 5.2q-.025.2-.163.325Q8.75 18 8.55 18H8q0 .825.588 1.413Q9.175 20 10 20ZM6.2 10H7.75 6.8Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOff.displayName = 'AmauiIconMaterialMicExternalOff';

export default IconMaterialMicExternalOff;
