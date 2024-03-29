import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInterpreterModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterpreterModeFilled'

      short_name='InterpreterMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 16.5q-.625 0-1.062-.438Q19 15.625 19 15v-2.5q0-.625.438-1.062Q19.875 11 20.5 11t1.062.438Q22 11.875 22 12.5V15q0 .625-.438 1.062-.437.438-1.062.438ZM20 20v-1.55q-1.275-.2-2.137-1.162Q17 16.325 17 15h1q0 1.05.725 1.775.725.725 1.775.725 1.05 0 1.775-.725Q23 16.05 23 15h1q0 1.325-.862 2.288-.863.962-2.138 1.162V20ZM9 12q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q.35 0 .688.05.337.05.662.175-.65.775-1 1.738Q9 6.925 9 8t.35 2.037q.35.963 1 1.738-.325.125-.662.175Q9.35 12 9 12Zm-8 8v-2.775q0-.85.425-1.575t1.175-1.1q.95-.5 2.063-.862 1.112-.363 2.437-.563-1 .7-1.55 1.775T5 17.225V20Zm14-8q-1.65 0-2.825-1.175Q11 9.65 11 8q0-1.65 1.175-2.825Q13.35 4 15 4q1.65 0 2.825 1.175Q19 6.35 19 8q0 1.65-1.175 2.825Q16.65 12 15 12Zm-8 8v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.888-1.1Q13.1 13 15 13q.3 0 .588.012.287.013.562.038-.25.45-.412.938-.163.487-.213 1.012-.1.725.075 1.55.175.825.575 1.45.375.65.925 1.15.55.5 1.225.85Z"/>
    </Icon>
  );
});

IconMaterialInterpreterModeFilled.displayName = 'AmauiIconMaterialInterpreterModeFilled';

export default IconMaterialInterpreterModeFilled;
