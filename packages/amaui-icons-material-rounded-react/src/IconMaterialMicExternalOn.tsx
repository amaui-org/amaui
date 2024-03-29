import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOn'

      short_name='MicExternalOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 7q-.375-.425-.587-.925Q4 5.575 4 5q0-1.25.875-2.125T7 2q1.25 0 2.125.875T10 5q0 .575-.212 1.075-.213.5-.588.925ZM10 22q-1.65 0-2.825-1.175Q6 19.65 6 18h-.55q-.2 0-.337-.125-.138-.125-.163-.325L4.1 9.1q-.05-.45.25-.775T5.1 8h3.8q.45 0 .75.325t.25.775l-.85 8.45q-.025.2-.163.325Q8.75 18 8.55 18H8q0 .825.588 1.413Q9.175 20 10 20t1.413-.587Q12 18.825 12 18V6q0-1.65 1.175-2.825Q14.35 2 16 2q1.65 0 2.825 1.175Q20 4.35 20 6v15q0 .425-.288.712Q19.425 22 19 22t-.712-.288Q18 21.425 18 21V6q0-.825-.587-1.412Q16.825 4 16 4q-.825 0-1.412.588Q14 5.175 14 6v12q0 1.65-1.175 2.825Q11.65 22 10 22Zm-3.2-6h.4l.6-6H6.2Zm.4-6h-1 1.6Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOn.displayName = 'AmauiIconMaterialMicExternalOn';

export default IconMaterialMicExternalOn;
