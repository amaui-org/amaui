import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndSafetyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetyFilled'

      short_name='HealthAndSafety'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.5q.625 0 1.062-.438.438-.437.438-1.062v-1h1q.625 0 1.062-.438Q16 12.125 16 11.5t-.438-1.062Q15.125 10 14.5 10h-1V9q0-.625-.438-1.062Q12.625 7.5 12 7.5t-1.062.438Q10.5 8.375 10.5 9v1h-1q-.625 0-1.062.438Q8 10.875 8 11.5t.438 1.062Q8.875 13 9.5 13h1v1q0 .625.438 1.062.437.438 1.062.438Zm0 6.425h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetyFilled.displayName = 'AmauiIconMaterialHealthAndSafetyFilled';

export default IconMaterialHealthAndSafetyFilled;
