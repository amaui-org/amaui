import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalActivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityW100Filled'

      short_name='LocalActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18.7q-.3 0-.5-.2t-.2-.5v-2.95q.9-.425 1.45-1.25.55-.825.55-1.8 0-.975-.55-1.8-.55-.825-1.45-1.25V6q0-.3.2-.5t.5-.2h16q.3 0 .5.2t.2.5v2.95q-.9.425-1.45 1.25-.55.825-.55 1.8 0 .975.55 1.8.55.825 1.45 1.25V18q0 .3-.2.5t-.5.2Zm8-5.45.8.625q.225.175.462 0 .238-.175.163-.45L13.1 12.4l1.025-.775q.225-.175.138-.45-.088-.275-.388-.275H12.75l-.375-1.125Q12.275 9.5 12 9.5t-.375.275L11.25 10.9H10.1q-.275 0-.375.262-.1.263.125.463l1 .775-.325 1.075q-.1.3.15.475t.475-.025Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityW100Filled.displayName = 'AmauiIconMaterialLocalActivityW100Filled';

export default IconMaterialLocalActivityW100Filled;
