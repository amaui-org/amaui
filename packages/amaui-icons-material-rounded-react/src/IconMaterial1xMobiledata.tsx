import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledata'

      short_name='1xMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-.425 0-.713-.288Q6 16.425 6 16V9H5q-.425 0-.713-.288Q4 8.425 4 8t.287-.713Q4.575 7 5 7h2q.425 0 .713.287Q8 7.575 8 8v8q0 .425-.287.712Q7.425 17 7 17Zm5.075 0q-.625 0-.9-.475t.05-1L13.5 11.7l-1.925-3.2q-.325-.525-.05-1.013.275-.487.9-.487.225 0 .488.137.262.138.387.338l1.35 2.275 1.4-2.275q.125-.2.375-.338.25-.137.5-.137.625 0 .9.475t-.05 1L15.85 11.7l2.25 3.775q.325.525.038 1.025-.288.5-.913.5-.225 0-.487-.137-.263-.138-.388-.338l-1.7-2.875-1.725 2.875q-.125.2-.363.338-.237.137-.487.137Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledata.displayName = 'AmauiIconMaterial1xMobiledata';

export default IconMaterial1xMobiledata;
