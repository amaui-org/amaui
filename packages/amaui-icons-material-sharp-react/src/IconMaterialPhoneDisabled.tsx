import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabled'

      short_name='PhoneDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.975 9q.425-.975.65-1.975.225-1 .35-2.025H16.75l-.425 2.35ZM5 18.95q1.025-.075 2.038-.325 1.012-.25 1.987-.675L7.35 16.275 5 16.75Zm12.075-4.625L15.65 12.9q.275-.3.763-1.037.487-.738.612-.963l-2.85-2.875L15.1 3h5.85q.05.275.05.525v.525q0 2.75-1.038 5.375-1.037 2.625-2.887 4.9ZM3.95 21q-.275 0-.512-.012Q3.2 20.975 3 20.95v-5.825L8 14.1l2.9 2.9q.5-.3.975-.613.475-.312.925-.687L1.4 4.3l1.4-1.4 18.4 18.4-1.4 1.4-5.55-5.55q-2.225 1.8-4.887 2.825Q6.7 21 3.95 21ZM17.975 9Zm-8.95 8.95Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabled.displayName = 'AmauiIconMaterialPhoneDisabled';

export default IconMaterialPhoneDisabled;
