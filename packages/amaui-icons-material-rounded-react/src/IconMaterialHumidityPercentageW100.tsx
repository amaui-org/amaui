import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityPercentageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentageW100'

      short_name='HumidityPercentage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-4.8-.075q.1.1.25.1t.25-.1l5.075-5.075q.1-.1.1-.25t-.1-.25q-.1-.1-.237-.1-.138 0-.238.1l-5.1 5.1q-.1.1-.1.238 0 .137.1.237Zm.8-3.925q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm2 7.85q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2 1.538-4.375 1.537-2.375 4.637-5.25.125-.1.25-.15.125-.05.275-.05.15 0 .275.05.125.05.25.15 3.1 2.875 4.638 5.25Q18.7 11.8 18.7 13.8q0 3.175-2.025 5.037Q14.65 20.7 12 20.7Zm0-.7q2.5 0 4.25-1.738Q18 16.525 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.725 1.75 4.462Q9.5 20 12 20Zm0-6.2Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentageW100.displayName = 'AmauiIconMaterialHumidityPercentageW100';

export default IconMaterialHumidityPercentageW100;
