import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIntegrationInstructionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IntegrationInstructionsFilled'

      short_name='IntegrationInstructions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 14.85q.275-.275.275-.7 0-.425-.275-.725L8.85 12l1.475-1.475q.275-.275.275-.7 0-.425-.275-.725-.3-.275-.725-.275t-.7.275l-2.2 2.2q-.275.275-.275.7 0 .425.275.7l2.175 2.175q.275.275.7.275.425 0 .725-.3Zm3.4.025q.3.3.725.3t.7-.275l2.175-2.175q.275-.275.275-.7 0-.425-.275-.7l-2.2-2.2q-.275-.275-.7-.275-.425 0-.725.275-.275.3-.275.725t.275.7l1.475 1.475-1.45 1.425q-.275.3-.275.725t.275.7ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructionsFilled.displayName = 'AmauiIconMaterialIntegrationInstructionsFilled';

export default IconMaterialIntegrationInstructionsFilled;
