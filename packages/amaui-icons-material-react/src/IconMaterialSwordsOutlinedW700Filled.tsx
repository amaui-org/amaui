import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwordsOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordsOutlinedW700Filled'
      short_name='Swords'

      {...props}
    >
      <path d="m18.725 21.925-2.5-2.5-2.2 2.2-.525-.525q-.925-.925-.925-2.225t.925-2.225l3.25-3.25q.925-.925 2.225-.925t2.225.925l.525.525-2.2 2.2 2.5 2.5q.475.475.475 1.125t-.475 1.125l-1.05 1.05q-.475.475-1.125.475t-1.125-.475Zm3.85-15.775-11.45 11.425q.4.875.238 1.838-.163.962-.888 1.687l-.525.525-2.2-2.2-2.5 2.5q-.475.475-1.125.475T3 21.925l-1.05-1.05q-.475-.475-.475-1.125t.475-1.125l2.5-2.5-2.2-2.2.525-.525q.725-.725 1.7-.888.975-.162 1.85.263L17.75 1.325h4.825ZM6.45 11.2 1.425 6.15V1.325H6.25L11.3 6.4Z"/>
    </Icon>
  )
});

export default IconMaterialSwordsOutlinedW700Filled;
