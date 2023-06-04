import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSatelliteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteW100Filled'

      short_name='Satellite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.9 10.725q1.425-.35 2.45-1.375 1.025-1.025 1.375-2.45.05-.175-.05-.288-.1-.112-.3-.112-.125 0-.2.075-.075.075-.125.2-.3 1.2-1.187 2.087-.888.888-2.088 1.188-.125.05-.2.125-.075.075-.075.2 0 .175.113.287.112.113.287.063ZM6.875 7.9q.35-.175.6-.425t.425-.6q.075-.15 0-.263-.075-.112-.25-.112H6.9q-.175 0-.287.112-.113.113-.113.288v.75q0 .175.113.25.112.075.262 0Zm1.875 8.45h6.7q.25 0 .362-.225.113-.225-.037-.425L14 13.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.137-.188.012-.313.162l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSatelliteW100Filled.displayName = 'AmauiIconMaterialSatelliteW100Filled';

export default IconMaterialSatelliteW100Filled;
