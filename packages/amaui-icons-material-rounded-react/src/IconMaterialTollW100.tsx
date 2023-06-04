import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTollW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollW100'

      short_name='Toll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18.7q-2.8 0-4.75-1.95Q8.3 14.8 8.3 12t1.95-4.75Q12.2 5.3 15 5.3t4.75 1.95Q21.7 9.2 21.7 12t-1.95 4.75Q17.8 18.7 15 18.7Zm-8.5-.45q-1.95-.675-3.075-2.4Q2.3 14.125 2.3 12t1.125-3.85Q4.55 6.425 6.5 5.75q.2-.075.35.037.15.113.15.338 0 .1-.062.175-.063.075-.163.125-1.725.65-2.75 2.175T3 12q0 1.875 1.025 3.4t2.75 2.175q.1.05.163.137Q7 17.8 7 17.9q0 .2-.15.312-.15.113-.35.038ZM15 12Zm0 6q2.5 0 4.25-1.75T21 12q0-2.5-1.75-4.25T15 6q-2.5 0-4.25 1.75T9 12q0 2.5 1.75 4.25T15 18Z"/>
    </Icon>
  );
});

IconMaterialTollW100.displayName = 'AmauiIconMaterialTollW100';

export default IconMaterialTollW100;
