import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkHistoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryW100'

      short_name='WorkHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19V8 19Zm-.7.7V7.3h6V4.6h5.4v2.7h6v5.675q-.175-.1-.337-.175-.163-.075-.363-.15V8H4v11h8.375q.05.2.088.362.037.163.087.338ZM10 7.3h4v-2h-4Zm8 14.4q-1.55 0-2.625-1.075T14.3 18q0-1.55 1.075-2.625T18 14.3q1.55 0 2.625 1.075T21.7 18q0 1.55-1.075 2.625T18 21.7Zm1.65-1.55.5-.5-1.8-1.8v-2.7h-.7v3Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryW100.displayName = 'AmauiIconMaterialWorkHistoryW100';

export default IconMaterialWorkHistoryW100;
