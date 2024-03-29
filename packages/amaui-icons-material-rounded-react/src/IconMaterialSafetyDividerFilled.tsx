import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyDividerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyDividerFilled'

      short_name='SafetyDivider'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-.425 0-.712-.288Q11 18.425 11 18V6q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6v12q0 .425-.287.712Q12.425 19 12 19Zm-7-7q-.825 0-1.413-.588Q3 10.825 3 10t.587-1.413Q4.175 8 5 8q.825 0 1.412.587Q7 9.175 7 10q0 .825-.588 1.412Q5.825 12 5 12Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q4.25 13 5 13t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V16Zm18-4q-.825 0-1.413-.588Q17 10.825 17 10t.587-1.413Q18.175 8 19 8q.825 0 1.413.587Q21 9.175 21 10q0 .825-.587 1.412Q19.825 12 19 12Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q18.25 13 19 13t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V16Z"/>
    </Icon>
  );
});

IconMaterialSafetyDividerFilled.displayName = 'AmauiIconMaterialSafetyDividerFilled';

export default IconMaterialSafetyDividerFilled;
