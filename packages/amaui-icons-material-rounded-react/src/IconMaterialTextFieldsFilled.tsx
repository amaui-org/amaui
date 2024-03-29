import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFieldsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsFilled'

      short_name='TextFields'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 20q-.625 0-1.062-.438Q7 19.125 7 18.5V7H3.5q-.625 0-1.062-.438Q2 6.125 2 5.5t.438-1.062Q2.875 4 3.5 4h10q.625 0 1.062.438Q15 4.875 15 5.5t-.438 1.062Q14.125 7 13.5 7H10v11.5q0 .625-.438 1.062Q9.125 20 8.5 20Zm9 0q-.625 0-1.062-.438Q16 19.125 16 18.5V12h-1.5q-.625 0-1.062-.438Q13 11.125 13 10.5t.438-1.062Q13.875 9 14.5 9h6q.625 0 1.062.438Q22 9.875 22 10.5t-.438 1.062Q21.125 12 20.5 12H19v6.5q0 .625-.438 1.062Q18.125 20 17.5 20Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsFilled.displayName = 'AmauiIconMaterialTextFieldsFilled';

export default IconMaterialTextFieldsFilled;
