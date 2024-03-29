import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicrowaveGen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveGen'

      short_name='MicrowaveGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm1-1h10V7H5Zm13 0q.375 0 .688-.312Q19 16.375 19 16q0-.375-.312-.688Q18.375 15 18 15q-.375 0-.688.275Q17 15.55 17 16q0 .375.312.688.313.312.688.312ZM7 15V9h6v6Zm11-2q.375 0 .688-.275Q19 12.45 19 12q0-.45-.312-.725Q18.375 11 18 11q-.375 0-.688.275Q17 11.55 17 12q0 .45.312.725.313.275.688.275Zm0-4q.375 0 .688-.275Q19 8.45 19 8q0-.45-.312-.725Q18.375 7 18 7q-.375 0-.688.275Q17 7.55 17 8q0 .45.312.725Q17.625 9 18 9ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveGen.displayName = 'AmauiIconMaterialMicrowaveGen';

export default IconMaterialMicrowaveGen;
