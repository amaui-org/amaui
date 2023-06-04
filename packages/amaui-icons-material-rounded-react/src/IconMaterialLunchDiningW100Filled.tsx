import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLunchDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningW100Filled'

      short_name='LunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 10q-.2 0-.35-.15-.15-.15-.15-.35 0-2.2 1.9-3.45T12 4.8q4.9 0 6.8 1.25 1.9 1.25 1.9 3.45 0 .2-.15.35-.15.15-.35.15Zm-.5 3.5q0-.125.088-.238.087-.112.237-.137.675-.125 1.138-.55.462-.425 1.437-.425 1.1 0 1.563.5.462.5 1.337.5t1.338-.5q.462-.5 1.562-.5t1.562.5q.463.5 1.338.5t1.313-.5q.437-.5 1.537-.5.975 0 1.463.425.487.425 1.162.55.15.025.238.137.087.113.087.238 0 .15-.1.25t-.25.075q-.875-.125-1.288-.55-.412-.425-1.212-.425-.875 0-1.362.5-.488.5-1.588.5t-1.562-.5q-.463-.5-1.338-.5t-1.337.5q-.463.5-1.563.5-1.1 0-1.563-.5-.462-.5-1.337-.5-.8 0-1.237.425-.438.425-1.313.55-.15.025-.25-.075t-.1-.25Zm1.5 6.2q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2v-.7q0-.625.437-1.062Q4.175 16 4.8 16h14.4q.625 0 1.063.438.437.437.437 1.062v.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningW100Filled.displayName = 'AmauiIconMaterialLunchDiningW100Filled';

export default IconMaterialLunchDiningW100Filled;
