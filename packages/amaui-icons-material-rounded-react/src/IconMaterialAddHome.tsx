import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHome'

      short_name='AddHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 16.5v2q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-2h2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-2v-2q0-.2-.15-.35Q18.2 13 18 13q-.2 0-.35.15-.15.15-.15.35v2h-2q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM18 21q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21ZM6 19q-.825 0-1.412-.587Q4 17.825 4 17V8q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v1.3q-.475-.15-.975-.225Q18.525 9 18 9V8l-6-4.5L6 8v9h5.075q.075.525.225 1.025.15.5.375.975Zm6-8.75Z"/>
    </Icon>
  );
});

IconMaterialAddHome.displayName = 'AmauiIconMaterialAddHome';

export default IconMaterialAddHome;
