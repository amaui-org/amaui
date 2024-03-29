import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowboarding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowboarding'

      short_name='Snowboarding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 5q.825 0 1.413-.588Q18 3.825 18 3t-.587-1.413Q16.825 1 16 1q-.825 0-1.412.587Q14 2.175 14 3q0 .825.588 1.412Q15.175 5 16 5Zm1.85 17.4L5.225 19.7q-1.1-.225-1.913-.888Q2.5 18.15 2.075 17.2q-.05-.1-.05-.45.075-.3.325-.475t.575-.125q.175.05.3.162.125.113.2.263.3.625.838 1.075.537.45 1.262.6l.475.1L9.5 16l-.975-4.3L11.45 7H9.1l-1.9 3.05L5.5 9 8 5h5.7q.675 0 1.088.375.412.375.562.7l.525 1.2q.5 1.2 1.613 1.963Q18.6 10 20 10v2q-1.75 0-3.2-.838-1.45-.837-2.325-2.212l-1.8 2.875L16 14.5l1 6.2 1.15.225q.15.05.312.063.163.012.313.012.6 0 1.075-.2t.9-.55q.125-.125.65-.15.325.05.488.325.162.275.112.55-.025.125-.087.225-.063.1-.163.2-.625.55-1.4.825-.775.275-1.575.275-.225 0-.463-.025-.237-.025-.462-.075Zm-2.95-2.15-.75-4.65-2.85-2.025.45 3.325-3.025 2.025Z"/>
    </Icon>
  );
});

IconMaterialSnowboarding.displayName = 'AmauiIconMaterialSnowboarding';

export default IconMaterialSnowboarding;
