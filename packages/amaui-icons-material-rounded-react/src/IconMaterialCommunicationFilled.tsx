import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommunicationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunicationFilled'

      short_name='Communication'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.2 13.2-1.05-1.05q.35-.5.35-1.138 0-.637-.35-1.137L10.2 8.8q.8.95.8 2.2 0 1.25-.8 2.2Zm2.125 2.15-1.075-1.075q1.25-1.4 1.25-3.263 0-1.862-1.25-3.262l1.075-1.075q.825.925 1.25 2.05Q14 9.85 14 11.012q0 1.163-.425 2.288-.425 1.125-1.25 2.05ZM5 12q-.825 0-1.413-.588Q3 10.825 3 10t.587-1.413Q4.175 8 5 8q.825 0 1.412.587Q7 9.175 7 10q0 .825-.588 1.412Q5.825 12 5 12Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q4.25 13 5 13t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V16Zm18-4q-.825 0-1.413-.588Q17 10.825 17 10t.587-1.413Q18.175 8 19 8q.825 0 1.413.587Q21 9.175 21 10q0 .825-.587 1.412Q19.825 12 19 12Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q18.25 13 19 13t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V16Z"/>
    </Icon>
  );
});

IconMaterialCommunicationFilled.displayName = 'AmauiIconMaterialCommunicationFilled';

export default IconMaterialCommunicationFilled;
