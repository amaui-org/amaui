import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftFilled'

      short_name='SwipeLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 7q-.425 0-.712-.287Q2 6.425 2 6V2.75q0-.325.213-.538Q2.425 2 2.75 2q.325 0 .538.212.212.213.212.538v1.275Q5.25 2.6 7.413 1.8 9.575 1 12 1q3.65 0 6.163 1.537Q20.675 4.075 21.625 6q.2.4-.025.7-.225.3-.7.3-.275 0-.425-.125-.15-.125-.25-.325-.75-1.425-2.825-2.738Q15.325 2.5 12 2.5q-2.275 0-4.287.8Q5.7 4.1 4.1 5.5h2.15q.325 0 .537.213Q7 5.925 7 6.25q0 .325-.213.537Q6.575 7 6.25 7Zm8.2 16q-.45 0-.912-.163-.463-.162-.738-.437l-3.875-4.075q-.275-.275-.287-.7-.013-.425.212-.75.175-.25.475-.363.3-.112.675-.012l3.25.75V6.5q0-.625.438-1.062Q10.875 5 11.5 5t1.062.438Q13 5.875 13 6.5v6h.9q.2 0 .45.05t.45.15l4.1 2.05q.575.275.875.863.3.587.2 1.212l-.625 4.45q-.125.75-.675 1.237-.55.488-1.3.488Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftFilled.displayName = 'AmauiIconMaterialSwipeLeftFilled';

export default IconMaterialSwipeLeftFilled;
