import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScubaDivingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDivingFilled'

      short_name='ScubaDiving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 15q-.825 0-1.412-.588Q1 13.825 1 13t.588-1.413Q2.175 11 3 11t1.412.587Q5 12.175 5 13q0 .825-.588 1.412Q3.825 15 3 15Zm5.9-4.9q-.6.175-1.137-.138-.538-.312-.713-.912-.175-.6.138-1.15.312-.55.912-.7L12.65 6l.775 2.9ZM4 23l-1.6-1.2L5.25 18l.775-4.45q.075-.6.475-1.063.4-.462 1.025-.612L17 9l2-4 3-3 1 1-2.5 2.9-1.5 4.6-5 3.5-5.85 1.85L7 19Z"/>
    </Icon>
  );
});

IconMaterialScubaDivingFilled.displayName = 'AmauiIconMaterialScubaDivingFilled';

export default IconMaterialScubaDivingFilled;
