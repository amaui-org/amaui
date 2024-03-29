import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAgricultureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgricultureFilled'

      short_name='Agriculture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9V7h4l2 2Zm3 9q1.25 0 2.125-.875T9 15q0-1.25-.875-2.125T6 12q-1.25 0-2.125.875T3 15q0 1.25.875 2.125T6 18Zm13.5 0q.625 0 1.062-.438Q21 17.125 21 16.5t-.438-1.062Q20.125 15 19.5 15t-1.062.438Q18 15.875 18 16.5t.438 1.062Q18.875 18 19.5 18ZM6 16.5q-.625 0-1.062-.438Q4.5 15.625 4.5 15t.438-1.062Q5.375 13.5 6 13.5t1.062.438Q7.5 14.375 7.5 15t-.438 1.062Q6.625 16.5 6 16.5ZM19.5 20q-1.45 0-2.475-1.025Q16 17.95 16 16.5q0-1.45 1.025-2.475Q18.05 13 19.5 13q1.45 0 2.475 1.025Q23 15.05 23 16.5q0 1.45-1.025 2.475Q20.95 20 19.5 20ZM6 20q-2.075 0-3.537-1.462Q1 17.075 1 15q0-2.075 1.463-3.538Q3.925 10 6 10t3.538 1.462Q11 12.925 11 15q0 2.075-1.462 3.538Q8.075 20 6 20Zm5.9-4q.05-.15.075-.4.025-.25.025-.6 0-1.05-.337-2.05-.338-1-1.213-1.95H11q.825 0 1.413-.588Q13 9.825 13 9V6.7l-1.05-1.05-1.4 1.4-.75-.7 3.55-3.55.7.7-1.4 1.4L13.7 6H22v6.75q-.45-.35-1.087-.55-.638-.2-1.413-.2-1.475 0-2.825.962-1.35.963-1.625 3.038Z"/>
    </Icon>
  );
});

IconMaterialAgricultureFilled.displayName = 'AmauiIconMaterialAgricultureFilled';

export default IconMaterialAgricultureFilled;
