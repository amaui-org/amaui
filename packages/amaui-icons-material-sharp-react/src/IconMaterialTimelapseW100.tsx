import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimelapseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelapseW100'

      short_name='Timelapse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.35q2.225 0 3.788-1.562Q17.35 14.225 17.35 12q0-2.05-1.337-3.575Q14.675 6.9 12.65 6.7v5.55L8.7 16.2q.725.55 1.563.85.837.3 1.737.3Zm0 3.35q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialTimelapseW100.displayName = 'AmauiIconMaterialTimelapseW100';

export default IconMaterialTimelapseW100;
