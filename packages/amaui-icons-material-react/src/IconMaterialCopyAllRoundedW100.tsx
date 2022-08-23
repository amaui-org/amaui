import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCopyAllRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllRoundedW100'
      short_name='CopyAll'

      {...props}
    >
      <path d="M9.15 17.35Q8.5 17.35 8.075 16.925Q7.65 16.5 7.65 15.85V4.15Q7.65 3.5 8.075 3.075Q8.5 2.65 9.15 2.65H17.85Q18.5 2.65 18.925 3.075Q19.35 3.5 19.35 4.15V15.85Q19.35 16.5 18.925 16.925Q18.5 17.35 17.85 17.35ZM9.15 16.65H17.85Q18.15 16.65 18.4 16.4Q18.65 16.15 18.65 15.85V4.15Q18.65 3.85 18.4 3.6Q18.15 3.35 17.85 3.35H9.15Q8.85 3.35 8.6 3.6Q8.35 3.85 8.35 4.15V15.85Q8.35 16.15 8.6 16.4Q8.85 16.65 9.15 16.65ZM3.65 14.65H4.35V12.65H3.65ZM3.65 10.65H4.35V8.65H3.65ZM10.35 21.35H12.35V20.65H10.35ZM3.65 18.65H4.35V16.65H3.65ZM4.35 21.35V20.65H3.65Q3.65 20.95 3.85 21.15Q4.05 21.35 4.35 21.35ZM6.35 21.35H8.35V20.65H6.35ZM14.35 21.35Q14.65 21.35 14.85 21.15Q15.05 20.95 15.05 20.65H14.35ZM3.65 6.65H4.35V5.95Q4.05 5.95 3.85 6.15Q3.65 6.35 3.65 6.65Z"/>
    </Icon>
  );
});

IconMaterialCopyAllRoundedW100.displayName = 'AmauiIconMaterialCopyAllRoundedW100';

export default IconMaterialCopyAllRoundedW100;
