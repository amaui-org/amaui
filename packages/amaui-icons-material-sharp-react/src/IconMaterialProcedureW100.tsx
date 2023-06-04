import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcedureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcedureW100'

      short_name='Procedure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M722 522q-27 0-60-17.5T599 456q-30-31-47.5-64T534 331q0-7 1-11.5t3-6.5q20-20 84.5-33.5T762 266q8 0 13 1.5t8 4.5q3 3 4.5 8t1.5 13q0 76-12.5 139.5T744 516q-3 3-8.5 4.5T722 522Zm16-61q11-30 16.5-71.5T762 294q-45-1-86.5 5T600 317q24 13 44 27t37 30q20 19 34.5 41t22.5 46Zm-16 33q-7-25-22.5-51T661 394q-23-23-48-38t-50-22q2 23 17 51.5t38 51.5q24 24 52 39.5t52 17.5Zm130 313L675 630H275L89 444l19-19 177 177h400l186 186-19 19ZM346 923V795q0-25 17.5-42.5T406 735h148q25 0 42.5 17.5T614 795v128H346Zm28-28h212V795q0-14-9-23t-23-9H406q-14 0-23 9t-9 23v100Zm0 0V763v132Z"/>
    </Icon>
  );
});

IconMaterialProcedureW100.displayName = 'AmauiIconMaterialProcedureW100';

export default IconMaterialProcedureW100;
