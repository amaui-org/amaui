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
      <path d="M4 19V8 19Zm.8.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h4.5V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v4.175q-.175-.1-.337-.175-.163-.075-.363-.15V8.8q0-.35-.225-.575Q19.55 8 19.2 8H4.8q-.35 0-.575.225Q4 8.45 4 8.8v9.4q0 .35.225.575Q4.45 19 4.8 19h7.575q.05.2.088.362.037.163.087.338ZM10 7.3h4V6.1q0-.35-.225-.575Q13.55 5.3 13.2 5.3h-2.4q-.35 0-.575.225Q10 5.75 10 6.1Zm8 14.4q-1.55 0-2.625-1.075T14.3 18q0-1.55 1.075-2.625T18 14.3q1.55 0 2.625 1.075T21.7 18q0 1.55-1.075 2.625T18 21.7Zm1.65-1.55.5-.5-1.8-1.8v-2.7h-.7v3Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryW100.displayName = 'AmauiIconMaterialWorkHistoryW100';

export default IconMaterialWorkHistoryW100;
