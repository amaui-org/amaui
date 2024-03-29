import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopCircle'

      short_name='StopCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm-3-4h6q.425 0 .713-.288Q16 15.425 16 15V9q0-.425-.287-.713Q15.425 8 15 8H9q-.425 0-.712.287Q8 8.575 8 9v6q0 .425.288.712Q8.575 16 9 16Z"/>
    </Icon>
  );
});

IconMaterialStopCircle.displayName = 'AmauiIconMaterialStopCircle';

export default IconMaterialStopCircle;
