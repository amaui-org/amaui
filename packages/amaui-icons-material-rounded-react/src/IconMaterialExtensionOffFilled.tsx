import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffFilled'

      short_name='ExtensionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.075 21.9-.925-.9H14.2q0-1.25-.787-2.125Q12.625 18 11.5 18t-1.912.875Q8.8 19.75 8.8 21H5q-.825 0-1.413-.587Q3 19.825 3 19v-3.8q1.25 0 2.125-.788Q6 13.625 6 12.5t-.875-1.913Q4.25 9.8 3 9.8V5.85l-.925-.925q-.275-.275-.275-.7 0-.425.3-.725.275-.275.7-.275.425 0 .725.275l16.975 17q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3ZM20 17.15 6.85 4H9q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h4q.825 0 1.413.588Q20 5.175 20 6v4q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q21.05 15 20 15Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffFilled.displayName = 'AmauiIconMaterialExtensionOffFilled';

export default IconMaterialExtensionOffFilled;
