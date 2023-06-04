import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCircleRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightW100Filled'

      short_name='ArrowCircleRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.075 15.075 12 12 8.925l-.475.475 2.25 2.25H8.65v.7h5.125l-2.25 2.25Zm0 5.625q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightW100Filled.displayName = 'AmauiIconMaterialArrowCircleRightW100Filled';

export default IconMaterialArrowCircleRightW100Filled;
