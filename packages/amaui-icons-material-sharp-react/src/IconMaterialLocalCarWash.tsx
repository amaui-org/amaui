import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalCarWash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCarWash'

      short_name='LocalCarWash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5q-.625 0-1.062-.438Q10.5 4.125 10.5 3.5q0-.525.363-1.125Q11.225 1.775 12 1q.775.775 1.137 1.375.363.6.363 1.125 0 .625-.438 1.062Q12.625 5 12 5ZM7 5q-.625 0-1.062-.438Q5.5 4.125 5.5 3.5q0-.525.363-1.125Q6.225 1.775 7 1q.775.775 1.137 1.375.363.6.363 1.125 0 .625-.438 1.062Q7.625 5 7 5Zm10 0q-.625 0-1.062-.438Q15.5 4.125 15.5 3.5q0-.525.363-1.125Q16.225 1.775 17 1q.775.775 1.138 1.375.362.6.362 1.125 0 .625-.438 1.062Q17.625 5 17 5ZM3 23v-9l2.45-7h13.1L21 14v9h-3v-2H6v2Zm2.8-11h12.4l-1.05-3H6.85ZM5 14v5Zm2.5 4q.625 0 1.062-.438Q9 17.125 9 16.5t-.438-1.062Q8.125 15 7.5 15t-1.062.438Q6 15.875 6 16.5t.438 1.062Q6.875 18 7.5 18Zm9 0q.625 0 1.062-.438Q18 17.125 18 16.5t-.438-1.062Q17.125 15 16.5 15t-1.062.438Q15 15.875 15 16.5t.438 1.062Q15.875 18 16.5 18ZM5 19h14v-5H5Z"/>
    </Icon>
  );
});

IconMaterialLocalCarWash.displayName = 'AmauiIconMaterialLocalCarWash';

export default IconMaterialLocalCarWash;
