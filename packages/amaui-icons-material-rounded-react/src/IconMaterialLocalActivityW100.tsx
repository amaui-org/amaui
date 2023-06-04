import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityW100'

      short_name='LocalActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18.7q-.3 0-.5-.2t-.2-.5v-2.95q.9-.425 1.45-1.25.55-.825.55-1.8 0-.975-.55-1.8-.55-.825-1.45-1.25V6q0-.3.2-.5t.5-.2h16q.3 0 .5.2t.2.5v2.95q-.9.425-1.45 1.25-.55.825-.55 1.8 0 .975.55 1.8.55.825 1.45 1.25V18q0 .3-.2.5t-.5.2Zm0-.7h16v-2.55q-.95-.525-1.475-1.463Q18 13.05 18 12t.525-1.988Q19.05 9.075 20 8.55V6H4v2.55q.95.525 1.475 1.462Q6 10.95 6 12t-.525 1.987Q4.95 14.925 4 15.45Zm8-4.75.8.625q.225.175.475 0 .25-.175.15-.45L13.1 12.4l1.025-.775q.225-.175.138-.45-.088-.275-.388-.275H12.75l-.375-1.125Q12.275 9.5 12 9.5t-.375.275L11.25 10.9H10.1q-.3 0-.387.275-.088.275.137.45l1 .775-.325 1.075q-.1.275.15.463.25.187.475-.013ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityW100.displayName = 'AmauiIconMaterialLocalActivityW100';

export default IconMaterialLocalActivityW100;
