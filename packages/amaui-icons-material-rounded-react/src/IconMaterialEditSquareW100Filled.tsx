import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareW100Filled'

      short_name='EditSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.3 8.8-2.45-2.375 1.2-1.2q.425-.425 1.063-.425.637 0 1.062.45l.3.275q.425.45.425 1.062 0 .613-.45 1.063ZM5.8 22.4q-.65 0-1.075-.425Q4.3 21.55 4.3 20.9V8.5q0-.65.425-1.075Q5.15 7 5.8 7h7.925L8.45 12.3q-.325.325-.487.725-.163.4-.163.85V17.4q0 .625.438 1.062.437.438 1.062.438h3.525q.45 0 .85-.163.4-.162.725-.487l5.3-5.275V20.9q0 .65-.425 1.075-.425.425-1.075.425Zm5.25-6q-.325 0-.537-.212-.213-.213-.213-.538V14.6q0-.3.125-.588.125-.287.325-.487l6.1-6.1L19.3 9.8l-6.125 6.15q-.2.2-.487.325-.288.125-.588.125Z"/>
    </Icon>
  );
});

IconMaterialEditSquareW100Filled.displayName = 'AmauiIconMaterialEditSquareW100Filled';

export default IconMaterialEditSquareW100Filled;
