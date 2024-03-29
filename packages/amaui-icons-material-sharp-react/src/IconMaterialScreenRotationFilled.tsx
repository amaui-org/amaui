import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationFilled'

      short_name='ScreenRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 20.8 3.2 10.25l7.05-7.05L20.8 13.75ZM12 24q-2.475 0-4.662-.95-2.188-.95-3.813-2.575Q1.9 18.85.95 16.663 0 14.475 0 12h2q0 1.8.612 3.425.613 1.625 1.688 2.925 1.075 1.3 2.55 2.212 1.475.913 3.175 1.263L7.4 19.2l1.4-1.4 5.9 5.9q-.675.15-1.325.225Q12.725 24 12 24Zm10-12q0-1.8-.612-3.425Q20.775 6.95 19.7 5.65q-1.075-1.3-2.55-2.213-1.475-.912-3.175-1.262L16.6 4.8l-1.4 1.4L9.3.3q.675-.15 1.325-.225Q11.275 0 12 0q2.475 0 4.663.95 2.187.95 3.812 2.575Q22.1 5.15 23.05 7.337 24 9.525 24 12Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationFilled.displayName = 'AmauiIconMaterialScreenRotationFilled';

export default IconMaterialScreenRotationFilled;
