import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilePresent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresent'

      short_name='FilePresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 22H4V2h11l5 5Zm-2-2V8h-4V4H6v16ZM6 4v4-4 16Zm6 15q1.675 0 2.838-1.175Q16 16.65 16 15v-4h-2v4q0 .825-.575 1.413Q12.85 17 12 17q-.825 0-1.412-.587Q10 15.825 10 15V9.5q0-.225.15-.363Q10.3 9 10.5 9q.225 0 .363.137.137.138.137.363V15h2V9.5q0-1.05-.725-1.775Q11.55 7 10.5 7q-1.05 0-1.775.725Q8 8.45 8 9.5V15q0 1.65 1.175 2.825Q10.35 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialFilePresent.displayName = 'AmauiIconMaterialFilePresent';

export default IconMaterialFilePresent;
