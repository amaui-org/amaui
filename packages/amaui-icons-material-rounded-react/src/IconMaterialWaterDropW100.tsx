import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDropW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropW100'

      short_name='WaterDrop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2 1.538-4.375 1.537-2.375 4.637-5.25.125-.1.25-.15.125-.05.275-.05.15 0 .275.05.125.05.25.15 3.1 2.875 4.638 5.25Q18.7 11.8 18.7 13.8q0 3.175-2.025 5.037Q14.65 20.7 12 20.7Zm0-.7q2.5 0 4.25-1.738Q18 16.525 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.725 1.75 4.462Q9.5 20 12 20Zm0-6.2Zm.2 4.8q.2-.025.3-.125.1-.1.1-.25 0-.175-.125-.263-.125-.087-.3-.062-1.025.075-2.325-.662-1.3-.738-1.6-2.413-.05-.225-.137-.325-.088-.1-.238-.1t-.262.112q-.113.113-.063.388.375 2.025 1.9 2.9t2.75.8Z"/>
    </Icon>
  );
});

IconMaterialWaterDropW100.displayName = 'AmauiIconMaterialWaterDropW100';

export default IconMaterialWaterDropW100;
