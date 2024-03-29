import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunctionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsFilled'

      short_name='Functions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.525 20q-.65 0-1.087-.438Q6 19.125 6 18.475q0-.2.1-.425.1-.225.225-.35L12.5 12 6.325 6.3Q6.2 6.175 6.1 5.95 6 5.725 6 5.525q0-.65.438-1.087Q6.875 4 7.525 4H16.5q.625 0 1.062.438Q18 4.875 18 5.5t-.438 1.062Q17.125 7 16.5 7H11l3.575 3.525q.325.3.487.687.163.388.163.788t-.163.787q-.162.388-.487.688L11 17h5.5q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q17.125 20 16.5 20Z"/>
    </Icon>
  );
});

IconMaterialFunctionsFilled.displayName = 'AmauiIconMaterialFunctionsFilled';

export default IconMaterialFunctionsFilled;
