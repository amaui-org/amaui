import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrongLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocation'

      short_name='WrongLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.175 7.35q.275.275.7.275.425 0 .7-.275l1.4-1.4 1.4 1.4q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7l-1.4-1.4 1.4-1.4q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275l-1.4 1.4-1.4-1.4q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l1.4 1.4-1.4 1.4q-.275.275-.275.7 0 .425.275.7ZM12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.25 0 .5.012.25.013.5.038v2.025q-.25-.05-.488-.063Q12.275 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2V10h2v.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075ZM13 10.7Z"/>
    </Icon>
  );
});

IconMaterialWrongLocation.displayName = 'AmauiIconMaterialWrongLocation';

export default IconMaterialWrongLocation;
