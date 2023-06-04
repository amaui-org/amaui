import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHomeW100'

      short_name='LocationHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575l6.7 5.075V19.7ZM6 10v8.9q1.3-1.125 2.713-1.688 1.412-.562 3.212-.562 1.725 0 3.288.587 1.562.588 2.787 1.638V10l-6-4.55Zm6 4.35q-.975 0-1.662-.688Q9.65 12.975 9.65 12q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163-.488-.487-1.163-.487t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488ZM6.9 19h10.075q-1.1-.8-2.362-1.225-1.263-.425-2.688-.425-1.425 0-2.675.425Q8 18.2 6.9 19Z"/>
    </Icon>
  );
});

IconMaterialLocationHomeW100.displayName = 'AmauiIconMaterialLocationHomeW100';

export default IconMaterialLocationHomeW100;
