import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraW100'

      short_name='PhotoCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q1.475 0 2.488-1.012Q15.5 14.475 15.5 13t-1.012-2.488Q13.475 9.5 12 9.5t-2.488 1.012Q8.5 11.525 8.5 13t1.012 2.488Q10.525 16.5 12 16.5Zm-7.2 3.2q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.5-.35.275-.125.6-.125h3.6q.325 0 .6.125.275.125.5.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm14.4-.7q.35 0 .575-.225Q20 18.55 20 18.2V7.8q0-.35-.225-.575Q19.55 7 19.2 7H4.8q-.35 0-.575.225Q4 7.45 4 7.8v10.4q0 .35.225.575Q4.45 19 4.8 19ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraW100.displayName = 'AmauiIconMaterialPhotoCameraW100';

export default IconMaterialPhotoCameraW100;
