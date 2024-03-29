import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTotalDissolvedSolidsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TotalDissolvedSolidsFilled'

      short_name='TotalDissolvedSolids'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 11.8q.625-2.175 2.538-4.612Q8.75 4.75 12 2q3.25 2.75 5.163 5.188Q19.075 9.625 19.7 11.8Zm15.55 3.65q-.225 1.225-.788 2.313-.562 1.087-1.437 1.962t-1.962 1.425q-1.088.55-2.288.75Zm-4.075-1.65h2.85l-8.1 8.1q-.575-.125-1.112-.288-.538-.162-1.038-.437Zm-5.725 0h2.85l-6.225 6.225q-.375-.35-.712-.725-.338-.375-.613-.8Zm-5.75 0h2.85L4.4 16.55q-.2-.675-.238-1.375-.037-.7.138-1.375Z"/>
    </Icon>
  );
});

IconMaterialTotalDissolvedSolidsFilled.displayName = 'AmauiIconMaterialTotalDissolvedSolidsFilled';

export default IconMaterialTotalDissolvedSolidsFilled;
