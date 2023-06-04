import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCircleRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightW100'

      short_name='ArrowCircleRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.25 14.825 2.3-2.3q.225-.225.225-.525 0-.3-.225-.525L12.225 9.15q-.1-.1-.225-.1t-.225.1q-.1.1-.1.237 0 .138.1.238l2 2.025h-4.8q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1h4.775l-2.025 2.025q-.1.075-.087.212.012.138.112.238.1.1.237.1.138 0 .238-.1ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightW100.displayName = 'AmauiIconMaterialArrowCircleRightW100';

export default IconMaterialArrowCircleRightW100;
