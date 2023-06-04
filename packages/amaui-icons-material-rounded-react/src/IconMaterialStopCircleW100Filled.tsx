import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopCircleW100Filled'

      short_name='StopCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-2.6-5.35h5.2q.325 0 .538-.213.212-.212.212-.537V9.4q0-.325-.212-.538-.213-.212-.538-.212H9.4q-.325 0-.537.212-.213.213-.213.538v5.2q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialStopCircleW100Filled.displayName = 'AmauiIconMaterialStopCircleW100Filled';

export default IconMaterialStopCircleW100Filled;
