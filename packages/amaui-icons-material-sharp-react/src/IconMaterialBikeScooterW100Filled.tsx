import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeScooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterW100Filled'

      short_name='BikeScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20.4q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663Q9.025 15.7 10 15.7q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM.3 18.35v-.7h4.65q.15-1.8 1.425-3.125Q7.65 13.2 9.35 13.05l-1.675-7.7H3.95v-.7h4.3l1.95 9.05H10q-1.8 0-3.075 1.275Q5.65 16.25 5.65 18.05v.3Zm19-1.05q-1.725 0-2.937-1.088-1.213-1.087-1.413-2.862h-2.8l-.15-.7h2.95q.075-.725.562-1.788Q16 9.8 16.95 9.3H11.3l-.15-.7h6.15l-1.925-5.25H12.95v-.7h2.925L18.05 8.6h1.25q1.85 0 3.1 1.25t1.25 3.1q0 1.775-1.312 3.062Q21.025 17.3 19.3 17.3Zm-.6-4.8.65-.25-1.05-2.8-.6.25Z"/>
    </Icon>
  );
});

IconMaterialBikeScooterW100Filled.displayName = 'AmauiIconMaterialBikeScooterW100Filled';

export default IconMaterialBikeScooterW100Filled;
